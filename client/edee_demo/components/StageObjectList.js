import React from "react";
import { graphql } from "react-apollo";

export default props => {
  const { edeeShortStage } = props.data;
  return (
    <div>
      Short stage:
      {edeeShortStage.map(item => (
        <div>
          <p key={item.id + "sourceStageObject"}>{item.url}</p>
          <p key={item.id + "sourceStageRelace"}>
            TADY MA BYT RELACE:{JSON.parse(item.data).content}
          </p>
        </div>
      ))}
    </div>
  );
};
