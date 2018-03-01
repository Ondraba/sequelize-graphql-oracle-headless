import React from "react";
import FullPageTemplate from "../client/edee_demo/layout/FullPageTemplate";
import withData from "../lib/withData";
import fetchEdeeStageDetail from "../../queries/fetchEdeeStageDetail";

const List = props => (
  <FullPageTemplate title="List Page">
    <div>Stranka {props.url.asPath} vyroutovana z EdeeCMS</div>
  </FullPageTemplate>
);

export default graphql(fetchEdeeStageDetail)(List);
