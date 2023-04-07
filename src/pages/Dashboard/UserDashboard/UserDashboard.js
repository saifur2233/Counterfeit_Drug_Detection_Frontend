import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">User Profile</h1>
      </div>
      <div className="grid p-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl"></div>
      </div>
    </div>
  );
};

export default UserDashboard;
