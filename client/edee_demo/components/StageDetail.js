import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchEdeeShortStageDetail from "../../queries/fetchEdeeShortStageDetail";
import gql from "graphql-tag";

const StageDetail = ({ data }) => {
  console.log(data);
  return !data.loading ? (
    <div>
      <div>Page: {data.edeeShortStageDetail.url}</div>
      <div>with prototype: {data.edeeShortStageDetail.prototype}</div>
      <div>
        named: <b>{data.edeeShortStageDetail.name}</b>
      </div>
      <div>
        with content:{
          JSON.parse(data.edeeShortStageDetail.data).sourceData.content
        }
      </div>
    </div>
  ) : (
    <div>...Loading</div>
  );
};

export default graphql(fetchEdeeShortStageDetail, {
  options: props => {
    return {
      variables: { url: props.url }
    };
  }
})(StageDetail);
