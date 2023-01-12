import React, { useState } from "react";

const DistributerRegister = () => {
  const [distributorId, setDistributorId] = useState("");

  const generateDistributorId = () => {
    setDistributorId(Math.floor(Math.random() * 100000000 + 3));
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    console.log(name, address, distributorId);
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <figure>
            <img
              width="400px"
              src="https://i.ibb.co/VgmQTLN/signup3.jpg"
              alt="DistributorRegister"
            />
          </figure>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <h1 className="text-5xl font-bold text-center text-secondary">
              Distributor Registration
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Distributor Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Distributor Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                name="address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Distributor ID</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Distributor ID"
                  className="input input-bordered"
                  defaultValue={distributorId}
                  required
                />
                <span onClick={generateDistributorId}>Generate</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Add to System</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DistributerRegister;
