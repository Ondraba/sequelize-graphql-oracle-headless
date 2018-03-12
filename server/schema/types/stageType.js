const graphql = require("graphql");
const GrapQLDateTime = require("./dateType");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const StageType = new GraphQLObjectType({
  name: "StageType",
  fields: () => ({
    id: { type: GraphQLID },
    stageId: { type: GraphQLInt },
    objectId: { type: GraphQLInt },
    objectType: { type: GraphQLString },
    name: { type: GraphQLString },
    sourceId: { type: GraphQLInt },
    lang: { type: GraphQLString },
    webId: { type: GraphQLInt },
    pageTreeId: { type: GraphQLInt },
    pageTreeSortOrder: { type: GraphQLInt },
    sectionSortOrder: { type: GraphQLInt },
    systemId: { type: GraphQLString },
    dataType: { type: GraphQLString },
    sourceType: { type: GraphQLString },
    prototype: { type: GraphQLString },
    objectDate: { type: GrapQLDateTime },
    created: { type: GrapQLDateTime },
    url: { type: GraphQLString },
    s_id: { type: GraphQLID },
    stageObjectId: { type: GraphQLInt },
    sourceDataType: { type: GraphQLString },
    data: { type: GraphQLString }
  })
});

module.exports = StageType;
