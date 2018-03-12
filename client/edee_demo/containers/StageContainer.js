import React, { Component } from "react";
import { graphql } from "react-apollo";
import StageUrlList from "../components/StageUrlList";
import stageQuery from "../../queries/stage";
import gql from "graphql-tag";

const StageContainer = graphql(stageQuery)(StageUrlList);

export default StageContainer;
