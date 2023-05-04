import { useState } from "react";
import Login from "../src/components/login/Login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
