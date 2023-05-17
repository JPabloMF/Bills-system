// import Login from "../src/components/login/Login";
import AppDrawer from "../src/components/dashboard/AppBa";
import Cards from "../src/components/dashboard/Cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <AppDrawer />
      <Cards />
    </div>
  );
}

export default App;
