import React from "react";
import { useLocation } from "react-router-dom";

function PageNotFound() {
  const location = useLocation();
  //console.log("Location ", location.pathname);
  return (
    <div>
      <h1>The page {location.pathname} doesn't exist!</h1>
    </div>
  );
}

export default PageNotFound;
