import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import CustomCursor from "../components/UI/CustomCursor";

const MainLayout = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
