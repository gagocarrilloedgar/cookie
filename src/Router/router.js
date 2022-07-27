import { Switch, Route, Link, useParams } from "react-router-dom";

import { PostmanAPI } from "../PostmanAPI";
import { CookieCard } from "../CookieCard";
import { TodoList, Inputs, TodoListNew } from "../TodoList";

import { NestedRouter } from "./NestedRouter";

const DynamicRouter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Dynamic router</h1>
      <p>This is a dynamic router. The id is {id}</p>
    </div>
  );
};

const linkStyle = { marginRight: "10px" };

const NavBar = ({ number }) => {
  return (
    <nav style={{ display: "flex", marginBottom: "10px" }}>
      <Link style={linkStyle} to="/">
        CookieCard
      </Link>
      <Link style={linkStyle} to="/fetch-todo-list">
        Fetch Todo list
      </Link>
      <Link style={linkStyle} to="/postman-api">
        Postman todo list
      </Link>
      <Link style={linkStyle} to="/nested">
        Nested router
      </Link>
      <Link style={linkStyle} to={`/in/${number}`}>
        Dyanmic router
      </Link>
    </nav>
  );
};

export const Router = () => {
  const number = Math.random();

  return (
    <div>
      <NavBar number={number} />
      <Switch>
        {/*  With React router V5 we need to either add exact to the Route or
        position the less restricive Route at the export default function
        first(second) */}
        <Route exact path="/" component={CookieCard} />
        <Route path="/fetch-todo-list">
          <TodoListNew />
        </Route>
        <Route path="/postman-api" component={PostmanAPI} />
        <Route path="/in/:id">
          <DynamicRouter />
        </Route>
        <Route path="/nested" component={NestedRouter} />
      </Switch>
    </div>
  );
};
