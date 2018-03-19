const { request, appendUrl } = require("../utils");
const API_BASE = "http://urine-analysis-dev.doctorwork.com/urine-miniapp/v3";

const isLocal = process.env.NODE_ENV === "local";

class Connector {
	constructor(ctx) {
		this.ctx = ctx;

		const cookie =
			"urine-miniapp_session_id=77aa3719-2826-43b1-88e9-6ec2dc212df1";

		// 获取 cookie
		// ctx.cookies.get('urine-miniapp_session_id');
		this._req = isLocal ? { cookie } : { cookie };
		this.rpc = (url, params, data) => {
			return request.call(this, API_BASE + url, params, data);
		};
	}

	async goods() {
		const article = await this.rpc("/goods");
		return article;
	}

	async building({ long, lat, page = 1, pageSize = 20 }) {
		const article = await this.rpc(
			"/building?pageNum={page}&pageSize={pageSize}&longitude={long}&latitude={lat}",
			{ long, lat, page, pageSize }
		);
		return article;
	}
}

module.exports = Connector;
