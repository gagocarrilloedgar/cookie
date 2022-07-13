import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { CookieCard } from "./CookieCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "auto",
        justifyContent: "center"
      }}
    >
      <CookieCard />
    </div>
  );
}

export default App;
