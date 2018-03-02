const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UrlType = new GraphQLObjectType({
  name: "UrlType",
  fields: () => ({
    url: { type: GraphQLString }
  })
});

module.exports = UrlType;
