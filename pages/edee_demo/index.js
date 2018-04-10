import React from "react";
import Link from "next/link";
import FullPageTemplate from "../../client/edee_demo/layout/FullPageTemplate";
import HomePageContent from "../../client/edee_demo/components/HomePageContent";
import withData from "../../lib/withData";

export default withData(props => (
  <FullPageTemplate title="FullPageTemplate">
    <HomePageContent />
  </FullPageTemplate>
));
