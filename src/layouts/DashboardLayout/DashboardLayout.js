import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import NavBar from "../../shared/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
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
            {user?.displayName === "SuperAdmin" && (
              <>
                <li>
                  <Link to="/dashboard/adminadd">Add Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/alladmins">All Admin</Link>
                </li>
              </>
            )}

            <li>
              <Link to="/dashboard/allMenufacturer">All Menufacturer</Link>
            </li>
            <li>
              <Link to="/dashboard/allDistributor">All Distributor</Link>
            </li>
            <li>
              <Link to="/dashboard/allRetailer">All Retailer</Link>
            </li>
            <li>
              <Link to="/dashboard/alltransportagency">Transport Agency</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
