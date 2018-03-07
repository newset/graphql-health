module.exports = {
	Query: {
		article(root, { id, topic }, ctx) {
			return ctx.connector.article.fetch(id, topic).then(res => {
				return res.data;
			});
		},
		recommends(root, { id, topic }, ctx) {
			return ctx.connector.article.recommend(id, topic).then(res => {
				return res.data;
			});
		}
	}
};
