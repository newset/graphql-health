const resolver = res => res.data;

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
