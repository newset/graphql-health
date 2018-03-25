"use strict";

const idProd = process.env.NODE_ENV === "production";

module.exports = () => {
	const config = {
		// middleware: ["graphql"],
		security: {
			csrf: {
				ignore: () => true
			}
		},
		listen: {
			port: 7001,
			hostname: "127.0.0.1"
			// path: '/var/run/egg.sock',
		},
		graphql: {
			router: false
		}
	};

	// should change to your own
	config.keys = "egg-graphql";
	return config;
};

exports.cluster = {
	listen: {
		port: 7001,
		hostname: "127.0.0.1"
		// path: '/var/run/egg.sock',
	}
};
