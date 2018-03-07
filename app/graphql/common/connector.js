const { request } = require("../utils");

class Connector {
	constructor(ctx) {
		this.ctx = ctx;
		this.rpc = request.bind(this);
	}

	async fetch(id, topic) {
		const article = await this.rpc(
			"/healtharticle/article_detail?articleId={id}&topicalId={topic}",
			{ id, topic }
		);
		return article;
	}

	async recommend(id, topic) {
		const article = await this.rpc(
			"/healtharticle/relevant_article_list?articleId={id}&topicalId={topic}",
			{ id, topic }
		);
		return article;
	}
}

module.exports = Connector;
