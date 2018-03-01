import React from "react";
import Link from "next/link";
import FullPageTemplate from "../../client/edee_demo/layout/FullPageTemplate";
import StageContainer from "../../client/edee_demo/containers/StageContainer";
import StageObjectContainer from "../../client/edee_demo/containers/StageObjectContainer";
import ShortStageContainer from "../../client/edee_demo/containers/ShortStageContainer";
import withData from "../../lib/withData";

export default withData(props => (
  <FullPageTemplate title="Admin">
    <ShortStageContainer />
  </FullPageTemplate>
));
