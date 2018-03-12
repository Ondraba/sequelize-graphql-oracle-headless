const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString
} = graphql;

const StageModels = require("../../models/stageModels");

const StageSourceType = require("./stageSourceType");
const StageObjectType = require("./stageObjectType");
const StageType = require("./stageType");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    stage: {
      type: new GraphQLList(StageType),
      resolve() {
        return StageModels.StageModel.findAll({});
      }
    },
    stageDetail: {
      type: StageType,
      args: { url: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { url }) {
        return StageModels.StageModel.findOne({
          where: { url: url }
        });
      }
    },
    edeeStageObject: {
      type: new GraphQLList(StageObjectType),
      resolve() {
        return StageModels.StageObjectModel.findAll({});
      }
    },
    edeeStageSource: {
      type: new GraphQLList(StageSourceType),
      resolve() {
        return StageModels.StageSourceModel.findAll({});
      }
    }
  })
});

module.exports = RootQueryType;
