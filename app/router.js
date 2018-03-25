module.exports = app => {
	app.get("/", "home.index");
	app.post("/graphql", "home.graphql");
	app.get("/graphiql", "home.graphiql");
};
