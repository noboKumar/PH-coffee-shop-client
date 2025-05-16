import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
