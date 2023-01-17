import React, { useState } from "react";

const TransportRegister = () => {
  const [transportId, setTransportId] = useState("");

  const generateTransportId = () => {
    setTransportId(Math.floor(Math.random() * 100000000 + 3));
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    console.log(name, address, transportId);
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <figure>
            <img
              width="400px"
              src="https://i.ibb.co/qpjTgM6/signup2.jpg"
              alt="DistributorRegister"
            />
          </figure>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <h1 className="text-5xl font-bold text-center text-secondary">
              Transport Registration
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Transport Agency Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Transport Agency Name"
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
                <span className="label-text">Enter Transport Agency ID</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Transport Agency ID"
                  className="input input-bordered"
                  defaultValue={transportId}
                  required
                />
                <span onClick={generateTransportId}>Generate</span>
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

export default TransportRegister;
