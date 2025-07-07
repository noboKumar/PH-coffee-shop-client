import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const navBarLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 py-5 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navBarLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">Coffee Shop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 gap-2 text-xl">
          {navBarLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user && user.email ? (
          <>
            <p className="text-lg font-semibold">{user?.displayName}</p>
            <button
              onClick={() => logOut()}
              className="inline-flex items-center btn"
            >
              <FiLogOut />
              Logout
            </button>
          </>
        ) : (
          <button className="btn">
            <Link to={"/signIn"}>Log In</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
