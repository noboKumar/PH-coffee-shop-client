import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, Outlet } from "react-router";

const DashBoard = () => {
  const dashLinks = (
    <>
      <li>
        <NavLink to={"/dashboard"} end>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/addCoffee"}>Add Coffee</NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Flex container to align hamburger left */}
        <div className="flex justify-start">
          <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
            <GiHamburgerMenu />
          </label>
        </div>

        {/* Main content */}
        <div className="p-4">
          <h1 className="text-4xl font-bold py-2">DashBoard</h1>
          <div className="divider"></div>
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay lg:hidden"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-screen w-80 p-4 text-lg space-y-4">
          <Link className="btn text-xl py-8 bg-base-300" to={"/"}>
            Coffee Shop
          </Link>
          {dashLinks}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
