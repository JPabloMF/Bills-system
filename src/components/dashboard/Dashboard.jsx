import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

import React from "react";

function Dashboard() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default Dashboard;
