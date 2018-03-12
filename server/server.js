const express = require("express");
const models = require("./models");
const session = require("express-session");
const expressGraphQL = require("express-graphql");
const next = require("next");
const routes = require("./routes");
const schema = require("./schema/schema");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(
    "/graphql",
    expressGraphQL(req => ({
      schema,
      pretty: true,
      graphiql: true
    }))
  );

  server.use(handler).listen(5000);
  module.exports = server;
});
