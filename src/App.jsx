// import Login from "../src/components/login/Login";
import AppDrawer from "../src/components/dashboard/AppBa";
import Cards from "../src/components/dashboard/Cards";
import EnhancedTable from "../src/components/dashboard/TableBills";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <AppDrawer />
      <Cards />
      <EnhancedTable />
    </div>
  );
}

export default App;
