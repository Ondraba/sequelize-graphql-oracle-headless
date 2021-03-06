import React, { Component } from "react";
import { graphql } from "react-apollo";
import stageDetailQuery from "../../queries/stageDetail";
import gql from "graphql-tag";
import Button from "react-bootstrap/lib/Button";

const StageDetail = ({ data }) => {
  console.log(data);
  return !data.loading ? (
    <div>
      <Button>Submit</Button>
      <div>Page: {data.stageDetail.url}</div>
      <div>with prototype: {data.stageDetail.prototype}</div>
      <div>
        named: <b>{data.stageDetail.name}</b>
      </div>
      <div>
        with content:{JSON.parse(data.stageDetail.data).sourceData.content}
      </div>
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
})(StageDetail);
