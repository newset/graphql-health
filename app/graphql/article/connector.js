const { request, appendUrl } = require("../utils");
const API_BASE = "http://healthapp-dev.doctorwork.com/mobile/v1";

class ArticleConnector {
	constructor(ctx) {
		this.ctx = ctx;
		this.rpc = (url, params, data) => {
			return request.call(this, API_BASE + url, params, data);
		};
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

module.exports = ArticleConnector;
