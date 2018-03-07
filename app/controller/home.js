"use strict";

module.exports = app => {
	class HomeController extends app.Controller {
		async index() {
			this.ctx.body = "hi, eggy";
		}
	}
	return HomeController;
};
