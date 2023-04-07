import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import Adminlogin from "../../../assets/images/auth/adminLogin.jpg";
import { AuthContext } from "../../../contexts/UserContext";

const AdminRegistration = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleAdminRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const userType = form.userType.value;
    const phone = form.phone.value;
    const adminObj = { name, email, password, userType, phone };
    console.log(adminObj);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName: userType })
          .then(() => {
            console.log("Profile updated");
            // admin registration
            fetch("http://localhost:4000/api/v1/adminsignup", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(adminObj),
            }).then((result) => {
              console.log(result);
              form.reset();
              toast.success("Admin created Successfully");
            });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero py-24 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="flex justify-center">
            <img src={Adminlogin} width="50%" alt="AdminLoginPage" />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center pt-4">Admin Panel</h1>
          <h2 className="text-2xl font-bold text-error text-center">
            !!!Restricted Area!!!
          </h2>
          <form onSubmit={handleAdminRegistration} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select
                name="userType"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled>Select the user type</option>
                <option value="SuperAdmin">SuperAdmin</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="phone number"
                className="input input-bordered"
                name="phone"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistration;
