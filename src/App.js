import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Router>
      <div
        style={{
          width: 100 + "vw",
          height: 50,
          paddingTop: 25,
          paddingLeft: 25,
          backgroundColor: "lightblue",
        }}
      >
        <NavLink activeClassName="is-active" exact={true} to="/">
          Home
        </NavLink>{" "}
        {" | "}
        <NavLink activeClassName="is-active" to="/about">
          About
        </NavLink>{" "}
        {" | "}
        <NavLink activeClassName="is-active" to="/projects">
          Projects
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
