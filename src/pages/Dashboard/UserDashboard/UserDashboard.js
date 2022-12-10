import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Select Your Role</h1>
      </div>
      <div className="grid p-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <Link to="/dashboard/registerMenufacturer">
            <figure>
              <img
                src="https://i.ibb.co/Zd90Tz7/menufacturer.jpg"
                alt="Shoes"
              />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Register Menufacturer</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="/dashboard/registerDistributor">
            <figure>
              <img
                width="100%"
                className="pt-8"
                src="https://i.ibb.co/NyVQSQX/distributor.jpg"
                alt="Shoes"
              />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Register Distributor</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="/dashboard/registerRetailer">
            <figure>
              <img src="https://i.ibb.co/W3LgN6x/parmacy.jpg" alt="Shoes" />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Register Retailer</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="/dashboard/registerTransport">
            <figure>
              <img
                width="100%"
                src="https://i.ibb.co/FWVxMr5/delivery.png"
                alt="Shoes"
              />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Register Transport</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
