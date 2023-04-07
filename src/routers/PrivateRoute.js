import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
      </div>
    );
  }
  if (user?.displayName === "SuperAdmin") {
    return children;
  }
  return (
    <Navigate to="/adminlogin" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
