"use strict";
const { graphqlKoa, graphiqlKoa } = require("apollo-server-koa");

module.exports = app => {
	class HomeController extends app.Controller {
		async index() {
			this.ctx.body = "hi, eggy";
		}

		async graphql() {
			const { ctx } = this;
			const { query } = ctx.request.body;

			// 登录检查

			const data = await ctx.service.graphql.query(
				JSON.stringify({ query })
			); //主查询方法

			ctx.body = {
				...data,
				errcode: data.errors ? 400 : 0
			};
		}

		graphiql() {
			const { ctx } = this;

			return graphiqlKoa({
				endpointURL: "/graphql"
			})(ctx);
		}
	}
	return HomeController;
};
