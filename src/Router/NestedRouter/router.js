import { Switch, Route, Link } from "react-router-dom";

const linkStyle = { marginRight: "10px" };

const NavBar = () => {
  return (
    <>
      <hr style={{ marginTop: "10px" }} />
      <nav style={{ display: "flex", marginBottom: "10px" }}>
        <Link style={linkStyle} to="/nested">
          Nested default
        </Link>
        <Link style={linkStyle} to="/nested/1">
          Nested 1
        </Link>
        <Link style={linkStyle} to="/nested/2">
          Nested 2
        </Link>
      </nav>
    </>
  );
};

export const NestedRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/nested/1">
          <h1>Nested 1</h1>
        </Route>
        <Route path="/nested/2">
          <h1>Nested list</h1>
        </Route>
        <Route path="/nested">
          <h1>Nested</h1>
        </Route>
      </Switch>
    </div>
  );
};
