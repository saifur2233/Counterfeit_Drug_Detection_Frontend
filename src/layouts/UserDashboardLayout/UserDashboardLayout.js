import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";

const UserDashboardLayout = () => {
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
              <Link to="/userdashboard/homeMenufacturer">Home Menu</Link>
            </li>
            <li>
              <Link to="/userdashboard/addDrugs">Add Drugs</Link>
            </li>
            <li>
              <Link to="/userdashboard/menuViewDrugRequest">
                View Drug Requests
              </Link>
            </li>
            <li>
              <Link to="/userdashboard/menuViewDrugDetails">
                View Drug Details
              </Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
            <li>
              <Link to="/userdashboard/homeDistributor">Home Distributor</Link>
            </li>
            <li>
              <Link to="/userdashboard/distributorRequestDrugs">
                Request for Drugs
              </Link>
            </li>
            <li>
              <Link to="/userdashboard/distributorViewRetailerReq">
                View Retailer Requests
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
