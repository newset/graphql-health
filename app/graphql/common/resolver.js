const resolver = res => {
	const { errcode } = res;
	if (errcode == 302) {
		return Promise.reject("Unauthorized");
	}
	return res.data;
};

module.exports = {
	Query: {
		article(root, { id, topic }, ctx) {
			return ctx.connector.article.fetch(id, topic).then(resolver);
		},
		recommends(root, { id, topic }, ctx) {
			return ctx.connector.article.recommend(id, topic).then(resolver);
		}
	}
};
