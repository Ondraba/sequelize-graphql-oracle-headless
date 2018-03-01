import React, { Component } from "react";
import { graphql } from "react-apollo";
import FullStageList from "../components/FullStageList";
import fetchShortStage from "../../queries/fetchShortStage";
import gql from "graphql-tag";

const ShortStageContainer = graphql(fetchShortStage)(FullStageList);

export default ShortStageContainer;
