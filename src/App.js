import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./Router";

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
      <Router />
    </div>
  );
}

export default App;
