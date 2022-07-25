import { Switch, Route, Link } from "react-router-dom";

import { PostmanAPI } from "../PostmanAPI";
import { CookieCard } from "../CookieCard";
import { TodoList } from "../TodoList";
import { NestedRouter } from "../NestedRouter";

const NavBar = () => (
  <div style={{ display: "flex", marginBottom: "10px" }}>
    <Link style={{ marginRight: "10px" }} to="/">
      Home
    </Link>
    <Link style={{ marginRight: "10px" }} to="/todo-list">
      Todo List
    </Link>
    <Link style={{ marginRight: "10px" }} to="/todo-list-fetch">
      Todo List Fetch
    </Link>
  </div>
);

export const Router = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/todo-list">
          <TodoList />
        </Route>
        <Route path="/todo-list-fetch" component={PostmanAPI} />
        <Route path="/nested" component={NestedRouter} />
        <Route path="/in/:id">
          <h3>Nested id</h3>
        </Route>
        <Route path="/" component={CookieCard} />
      </Switch>
    </div>
  );
};
