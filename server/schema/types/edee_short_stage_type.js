const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("./DateType");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const EdeeShortStageType = new GraphQLObjectType({
  name: "EdeeShortStageType",
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
    // changed: { type: GrapQLDateTime },
    url: { type: GraphQLString },
    s_id: { type: GraphQLID },
    stageObjectId: { type: GraphQLInt },
    sourceDataType: { type: GraphQLString },
    data: { type: GraphQLString }
  })
});

module.exports = EdeeShortStageType;
