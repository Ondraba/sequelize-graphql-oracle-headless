import gql from "graphql-tag";

export default gql`
  query StageDetailTest($url: String!) {
    stageDetail(url: $url) {
      id
      prototype
      url
    }
  }
`;
