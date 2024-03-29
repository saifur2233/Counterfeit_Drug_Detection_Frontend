import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import NavBar from "../../shared/NavBar/NavBar";

const UserDashboardLayout = () => {
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
            {user?.displayName === "Menufacturer" && (
              <>
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
              </>
            )}
            {user?.displayName === "Distributor" && (
              <>
                <li>
                  <Link to="/userdashboard/homeDistributor">
                    Home Distributor
                  </Link>
                </li>
                <li>
                  <Link to="/userdashboard/distributorRequestDrugs">
                    Send Drug Request
                  </Link>
                </li>

                <li>
                  <Link to="/userdashboard/distributorSendReq">
                    View Send Request
                  </Link>
                </li>
                <li>
                  <Link to="/userdashboard/distributorViewRetailerReq">
                    View Retailer Request
                  </Link>
                </li>
                <li>
                  <Link to="/">Logout</Link>
                </li>
              </>
            )}
            {user?.displayName === "Retailer" && (
              <>
                <li>
                  <Link to="/userdashboard/homeRetailer">Home Retailer</Link>
                </li>
                <li>
                  <Link to="/userdashboard/retailerRequestDrugs">
                    Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/userdashboard/distributorSendReq">
                    View Send Request
                  </Link>
                </li>
                <li>
                  <Link to="/">Logout</Link>
                </li>
              </>
            )}
            {user?.displayName === "TransportAgency" && (
              <>
                <li>
                  <Link to="/userdashboard/homeTransportAgency">
                    Home TransportAgency
                  </Link>
                </li>
                <li>
                  <Link to="/userdashboard/transportAgencyRequestDrugs">
                    Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/userdashboard/transportAgencySendReq">
                    View Send Request
                  </Link>
                </li>
                <li>
                  <Link to="/">Logout</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
