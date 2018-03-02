import React from "react";
import { graphql } from "react-apollo";
import FullPageTemplate from "../client/edee_demo/layout/FullPageTemplate";
import withData from "../lib/withData";
import StageDetail from "../client/edee_demo/components/StageDetail";

export default withData(props => (
  <FullPageTemplate>
    <StageDetail url={props.url.asPath} />
  </FullPageTemplate>
));
