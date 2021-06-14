import React from "react";
import { useHistory } from "react-router-dom";

function Projects() {
  const history = useHistory();
  //console.log("My history Project ", history);
  return (
    <div>
      <h1>Projects!</h1>
      <button onClick={() => history.push("/about")}>
        Go to the About page!
      </button>
    </div>
  );
}

export default Projects;
