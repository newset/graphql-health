const base = "http://healthapp-dev.doctorwork.com/mobile/v1";

// request promise

function makeUrl(url, params) {
	if (JSON.stringify(params) === "{}") {
		return url.replace(/\/{(\w+)}/g, "");
	}
	return (
		url &&
		url.replace(/{(\w+)}/g, (m, n) => {
			return params[n];
		})
	);
}

exports.request = function(url, params = {}, data) {
	return Promise.all([
		this.ctx.curl(makeUrl(url, params), {
			dataType: "json",
			headers: {
				Cookie: this._req.cookie
			}
		})
	]).then(map => {
		return map[0].data;
	});
};
