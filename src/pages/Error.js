import React from "react";
import Frontpage from "./Frontpage";

function Error() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1>404</h1>
        <p>The Page you're looking for is not Found</p>
      </div>
      <Frontpage />
    </div>
  );
}

export default Error;
