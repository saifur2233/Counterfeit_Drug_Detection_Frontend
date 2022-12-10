import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/drugs.png";

const NavBar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/adminlogin">
          Admin Login
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/userlogin">
          User Login
        </Link>
      </li>
      {/* {user?.uid ? (
        <>
          <li className="font-semibold">
            <Link to="/">{user?.email ? user?.email.slice(0, 7) : ""}</Link>
          </li>
          <li className="font-semibold">
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/dashboard">
              <button className="btn btn-outline btn-info">Dashboard</button>
            </Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )} */}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} width="60" className="mr-2" alt="Logo" />
          <h1 className="font-bold">MediQuick</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-secondary">Dashboard</Link>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default NavBar;
