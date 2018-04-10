import React, { Component } from "react";
import { graphql } from "react-apollo";
import stageDetailQuery from "../../queries/stageDetailTest";
import gql from "graphql-tag";

const StageDetailTest = ({ data }) => {
  console.log(data);
  return !data.loading ? (
    <div>
      <div>Page: {data.stageDetail.url}</div>
      <div>with prototype: {data.stageDetail.prototype}</div>
    </div>
  ) : (
    <div>...Loading</div>
  );
};

export default graphql(stageDetailQuery, {
  options: props => {
    return {
      variables: { url: props.url }
    };
  }
})(StageDetailTest);
