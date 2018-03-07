const base = "http://healthapp-dev.doctorwork.com/mobile/v1";

// request promise

function makeUrl(u, params) {
	let url = base + u;

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

exports.request = function(url, params) {
	return Promise.all([
		this.ctx.curl(makeUrl(url, params), {
			dataType: "json"
		})
	]).then(map => {
		return map[0].data;
	});
};
