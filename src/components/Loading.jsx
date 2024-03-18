import React from "react";
import { lineWobble } from "ldrs";
lineWobble.register();

const Loading = () => {
  return (
    <div>
      <l-line-wobble
        size="100"
        stroke="6"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-line-wobble>
    </div>
  );
};

export default Loading;
