import { useState } from "react";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
      <SignIn />
    </div>
  );
}

export default App;
