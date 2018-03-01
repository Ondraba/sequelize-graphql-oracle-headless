import React from "react";
import { graphql } from "react-apollo";
import { Link } from "../../../server/routes";

export default props => {
  const { edeeShortStage } = props.data;
  console.log(edeeShortStage);
  return (
    <div>
      Edee Stage Page List:
      {edeeShortStage.map((item, index) => (
        <ul>
          <li key={item.id + "url"}>
            <Link route={item.url}>
              <a>{item.url}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
