import SideBar from "./SideBar";
import AccountMenu from "./AccountMenu";
import Cards from "./Cards";
import TableBills from "./TableBills";

import React from "react";

function Dashboard() {
  return (
    <>
      <SideBar />
      <AccountMenu />
      <Cards />
      <TableBills />
    </>
  );
}

export default Dashboard;
