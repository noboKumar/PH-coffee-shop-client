import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
