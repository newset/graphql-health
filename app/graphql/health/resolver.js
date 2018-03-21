const resolver = res => {
	const { errcode, errmsg } = res;
	if (errcode == 302) {
		return Promise.reject(errmsg);
	}
	return res.data;
};

module.exports = {
	Query: {
		goods(root, { id, topic }, ctx) {
			return ctx.connector.health.goods().then(resolver);
		},
		building(root, { long, lat, page }, ctx) {
			return ctx.connector.health
				.building({ long, lat, pageNum: page })
				.then(resolver);
		}
	}
};
