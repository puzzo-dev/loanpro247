import React from "react";
import Frontpage from "./Frontpage";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // if (!queryParams) {
  //   return <div>Not Found</div>;
  // }
  const message = atob(queryParams.get("message"));

  return (
    <div className="row container-fluid">
      <div className="col-12 p-lg-5 mx-auto">
        <p className="px-lg-5">{message}</p>
      </div>
      <Frontpage />
    </div>
  );
}

export default Confirmation;
