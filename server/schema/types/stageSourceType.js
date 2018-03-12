const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const StageSourceType = new GraphQLObjectType({
  name: "StageSourceType",
  fields: () => ({
    id: { type: GraphQLID },
    stageObjectId: { type: GraphQLInt },
    sourceDataType: { type: GraphQLString },
    data: { type: GraphQLString }
  })
});

module.exports = StageSourceType;
