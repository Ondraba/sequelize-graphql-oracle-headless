import React from "react";
import Link from "next/link";
import FullPageTemplate from "../../client/edee_demo/layout/FullPageTemplate";
import StageContainer from "../../client/edee_demo/containers/StageContainer";
import withData from "../../lib/withData";

export default withData(props => (
  <FullPageTemplate title="FullPageTemplate">
    <StageContainer />
  </FullPageTemplate>
));
