import { Switch, Route } from "react-router-dom";

export const NestedRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/nested/1">
          <h1>Nested 1</h1>
        </Route>
        <Route path="/nested/new-list">
          <h2>Nested list</h2>
        </Route>
        <Route path="/nested">
          <h3>Nested</h3>
        </Route>
      </Switch>
    </div>
  );
};
