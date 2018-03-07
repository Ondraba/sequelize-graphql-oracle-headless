import React from "react";
import { graphql } from "react-apollo";
import ItemTemplate from "../client/edee_demo/layout/ItemTemplate";
import withData from "../lib/withData";
import StageDetail from "../client/edee_demo/components/StageDetail";

export default withData(props => (
  <ItemTemplate>
    <StageDetail url={props.url.asPath} />
  </ItemTemplate>
));
