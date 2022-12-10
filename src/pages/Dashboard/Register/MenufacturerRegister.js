import React from "react";

const MenufacturerRegister = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Menufacturer Registration
        </h1>
      </div>
      <div>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <figure>
                <img
                  width="400px"
                  src="https://i.ibb.co/VTw5prg/signup.jpg"
                  alt="MenufacturerRegister"
                />
              </figure>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl font-bold text-center text-secondary">
                  Registration
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Menufacturer Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Menufacturer Name"
                    className="input input-bordered"
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
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Menufacturer ID</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Menufacturer ID"
                      className="input input-bordered"
                    />
                    <span>Generate</span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Add to System</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenufacturerRegister;
