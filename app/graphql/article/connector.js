const DataLoader = require("dataloader");
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

function request(url, params) {
	return Promise.all([
		this.ctx.curl(makeUrl(url, params), {
			dataType: "json"
		})
	]).then(map => {
		return map[0].data;
	});
}

class ArticleConnector {
	constructor(ctx) {
		this.ctx = ctx;
		this.loader = new DataLoader(this.fetch.bind(this));
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

	fetchById(id, topic) {
		return this.loader.load(id, topic);
	}
}

module.exports = ArticleConnector;
