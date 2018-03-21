const { request, mockCookie } = require("../utils");
const API_BASE = "http://healthapp-dev.doctorwork.com/mobile/v1";

class Connector {
	constructor(ctx) {
		this.ctx = ctx;
		this.rpc = (url, params, data) => {
			return request.call(this, API_BASE + url, params, data);
		};

		mockCookie.call(
			this,
			"urine-miniapp_session_id",
			"77aa3719-2826-43b1-88e9-6ec2dc212df1"
		);
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
