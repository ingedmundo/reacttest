import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return (
      <div>
      <h2>Home</h2>
                    <Link to="/about">about basaename</Link>
      </div>
    )
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
          <Router basename="/reacttest">
            <div>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
            </div>
          </Router>
        );
}

export default AppRouter;
