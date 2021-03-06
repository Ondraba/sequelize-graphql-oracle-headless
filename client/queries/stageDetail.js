import gql from "graphql-tag";

export default gql`
  query StageDetail($url: String!) {
    stageDetail(url: $url) {
      id
      stageId
      objectId
      objectType
      name
      sourceId
      lang
      webId
      pageTreeId
      pageTreeSortOrder
      sectionSortOrder
      systemId
      dataType
      sourceType
      prototype
      objectDate
      created
      url
      stageObjectId
      s_id
      stageObjectId
      sourceDataType
      data
    }
  }
`;
