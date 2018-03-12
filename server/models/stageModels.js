const Sequelize = require("sequelize");
const sequelizedDb = require("../services/edeeMysql");

const StageSourceModel = sequelizedDb.define(
  "stageSource",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    stageObjectId: { type: Sequelize.INTEGER, field: "stageObjectId" },
    sourceDataType: { type: Sequelize.STRING, field: "sourceDataType" },
    data: { type: Sequelize.STRING, field: "data" }
  },
  {
    freezeTableName: false,
    timestamps: false,
    underscored: false,
    tableName: "stage_source"
  }
);

const StageObjectModel = sequelizedDb.define(
  "stageObject",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    stageId: { type: Sequelize.INTEGER, field: "stageId" },
    objectId: { type: Sequelize.INTEGER, field: "objectId" },
    objectType: { type: Sequelize.STRING, field: "objectType" },
    name: { type: Sequelize.STRING, field: "name" },
    sourceId: { type: Sequelize.INTEGER, field: "sourceId" },
    lang: { type: Sequelize.STRING, field: "lang" },
    webId: { type: Sequelize.INTEGER, field: "webId" },
    pagetreeId: { type: Sequelize.INTEGER, field: "pagetreeId" },
    pageTreeSortOrder: { type: Sequelize.INTEGER, field: "pageTreeSortOrder" },
    sectionSortOrder: { type: Sequelize.DOUBLE, field: "sectionSortOrder" },
    systemId: { type: Sequelize.STRING, field: "systemId" },
    dataType: { type: Sequelize.STRING, field: "dataType" },
    sourceType: { type: Sequelize.STRING, field: "sourceType" },
    prototype: { type: Sequelize.STRING, field: "prototype" },
    objectDate: { type: Sequelize.DATE, field: "objectDate" },
    created: { type: Sequelize.DATE, field: "created" },
    // changed: { type: Sequelize.DATE, field: "changed" },
    url: { type: Sequelize.STRING, field: "url" }
  },
  {
    freezeTableName: false,
    timestamps: false,
    underscored: false,
    tableName: "stage_object"
  }
);

const StageModel = sequelizedDb.define(
  "stage",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    stageId: { type: Sequelize.INTEGER, field: "stageId" },
    objectId: { type: Sequelize.INTEGER, field: "objectId" },
    objectType: { type: Sequelize.STRING, field: "objectType" },
    name: { type: Sequelize.STRING, field: "name" },
    sourceId: { type: Sequelize.INTEGER, field: "sourceId" },
    lang: { type: Sequelize.STRING, field: "lang" },
    webId: { type: Sequelize.INTEGER, field: "webId" },
    pagetreeId: { type: Sequelize.INTEGER, field: "pagetreeId" },
    pageTreeSortOrder: { type: Sequelize.INTEGER, field: "pageTreeSortOrder" },
    sectionSortOrder: { type: Sequelize.DOUBLE, field: "sectionSortOrder" },
    systemId: { type: Sequelize.STRING, field: "systemId" },
    dataType: { type: Sequelize.STRING, field: "dataType" },
    sourceType: { type: Sequelize.STRING, field: "sourceType" },
    prototype: { type: Sequelize.STRING, field: "prototype" },
    objectDate: { type: Sequelize.DATE, field: "objectDate" },
    created: { type: Sequelize.DATE, field: "created" },
    // changed: { type: Sequelize.DATE, field: "changed" },
    url: { type: Sequelize.STRING, field: "url" },
    s_id: { type: Sequelize.INTEGER, field: "s_id" },
    stageObjectId: { type: Sequelize.INTEGER, field: "stageObjectId" },
    sourceDataType: { type: Sequelize.STRING, field: "sourceDataType" },
    data: { type: Sequelize.STRING, field: "data" }
  },
  {
    freezeTableName: false,
    timestamps: false,
    underscored: false,
    tableName: "V_STAGE_SHORT"
  }
);

const StageSource = sequelizedDb.models.stageSource;
const StageObject = sequelizedDb.models.stageObject;
const Stage = sequelizedDb.models.stage;

module.exports = { StageSourceModel, StageObjectModel, StageModel };
