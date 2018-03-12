import React from "react";
import { graphql } from "react-apollo";
import { Link } from "../../../server/routes";

export default props => {
  const { stage } = props.data;
  return stage ? (
    <div>
      Edee Stage Page List:
      {stage.map((item, index) => (
        <ul>
          <li key={item.id + "url"}>
            <Link route={item.url} to={item.url}>
              <a>{item.url}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  ) : (
    <div>Loading..</div>
  );
};
