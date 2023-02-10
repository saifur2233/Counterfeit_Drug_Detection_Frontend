import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MenufacturerRegister = () => {
  const navigate = useNavigate();
  const [menufacturerId, setMenufacturerId] = useState("");

  const generateMenufacturerId = () => {
    setMenufacturerId(Math.floor(Math.random() * 100000000 + 1));
  };
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    //console.log(name, address, menufacturerId);
    const user = {
      name,
      address,
      userType: "Menufacturer",
      userId: menufacturerId,
    };
    console.log(user);

    // user registration
    fetch("http://localhost:4000/api/v1/user-signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Menufacturer Successfully Registered.");
        form.reset();
        navigate("/dashboard/allMenufacturer");
      });
  };
  return (
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
          <form onSubmit={handleRegistration} className="card-body">
            <h1 className="text-5xl font-bold text-center text-primary">
              Registration Menufacturer
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
                <span className="label-text">Enter Menufacturer ID</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Menufacturer ID"
                  className="input input-bordered"
                  defaultValue={menufacturerId}
                  required
                />
                <span onClick={generateMenufacturerId}>Generate</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add to System</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenufacturerRegister;
