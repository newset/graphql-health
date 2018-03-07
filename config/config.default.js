"use strict";

const idProd = process.env.NODE_ENV === "production";

module.exports = () => {
	const config = {
		middleware: ["graphql"],
		security: {
			csrf: {
				ignore: () => true
			}
		}
	};

	// should change to your own
	config.keys = "egg-graphql";

	return config;
};
