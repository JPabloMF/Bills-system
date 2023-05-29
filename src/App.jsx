// import Login from "../src/components/login/Login";
import SideBar from "../src/components/dashboard/SideBar";
import Cards from "../src/components/dashboard/Cards";
import EnhancedTable from "../src/components/dashboard/TableBills";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <SideBar />
      <Cards />
      <EnhancedTable />
    </div>
  );
}

export default App;
