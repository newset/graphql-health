"use strict";

module.exports = app => {
	class HomeController extends app.Controller {
		async index() {
			this.ctx.body = "hi, eggy";
		}

		async graphql() {
			const { ctx } = this;
			const { query } = ctx.request.body;

			const data = await ctx.service.graphql.query(
				JSON.stringify({ query })
			); //主查询方法

			ctx.body = {
				...data,
				errcode: data.errors ? 400 : 0
			};
		}
	}
	return HomeController;
};
