import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  //console.log("My history ", history);
  return (
    <div>
      <h1>This is About page!</h1>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => history.push("/projects")}
      >
        Go to the Projects!
      </button>
    </div>
  );
}

export default About;
