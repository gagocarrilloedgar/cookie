import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { CookieCard } from "./CookieCard";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "auto",
        height: "100vh",
        width: "100vw",
        justifyContent: "center"
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
