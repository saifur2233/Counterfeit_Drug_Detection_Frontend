import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";

const TransportRegister = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [transportId, setTransportId] = useState("");

  const generateTransportId = () => {
    setTransportId(Math.floor(Math.random() * 100000000 + 3));
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType = "TransportAgency";
    const userObj = {
      name,
      address,
      userType,
      userId: transportId,
      email,
      password,
    };
    console.log(userObj);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result;
        console.log(user);
        updateUser({ displayName: userType })
          .then(() => {
            console.log("Profile updated");
            // user registration
            fetch("http://localhost:4000/api/v1/user-signup", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userObj),
            }).then((result) => {
              console.log(result);
              form.reset();
              toast.success("TransportAgency Successfully Registered.");
              navigate("/dashboard/alltransportagency");
            });
          })
          .catch((error) => {
            setError(error.message);
            toast.error("Registration Failed!");
          });
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Registration Failed!");
      });
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                className="input input-bordered"
                required
              />
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

export default TransportRegister;
