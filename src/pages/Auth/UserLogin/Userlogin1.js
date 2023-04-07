import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Select Your Role</h1>
      </div>
      <div className="grid p-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <Link to="/">
            <figure>
              <img src="https://i.ibb.co/J7JLjs7/factory.jpg" alt="Shoes" />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Login As Menufacturer</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="">
            <figure>
              <img
                className="pt-8"
                src="https://i.ibb.co/dD3RN6h/distributor.png"
                alt="Shoes"
              />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Login As Distributor</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="/">
            <figure>
              <img src="https://i.ibb.co/mSVz0FV/pharmacy2.png" alt="Shoes" />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Login as Retailer</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="/">
            <figure>
              <img
                width="100%"
                src="https://i.ibb.co/6D8yyNf/delivery.jpg"
                alt="Shoes"
              />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Login As Transport Agency</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <Link to="/">
            <figure>
              <img
                width="100%"
                src="https://i.ibb.co/ZhpQX3g/13416094-5228739.jpg"
                alt="Shoes"
              />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="text-2xl text-center">Detect Fake Drugs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
