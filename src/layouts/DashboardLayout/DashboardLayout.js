import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile py-8">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">Register Page</Link>
            </li>
            <li>
              <Link to="/dashboard">All Menufacturer</Link>
            </li>
            <li>
              <Link to="/dashboard">All Distributor</Link>
            </li>
            <li>
              <Link to="/dashboard">All Retailer</Link>
            </li>
            <li>
              <Link to="/dashboard">All Pharmacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
