import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";

const UserLogin = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const userType = form.role.value;
    const password = form.password.value;
    //console.log(address, userType, password);

    logIn(email, password)
      .then((result) => {
        console.log(result);
        toast.success("You have Successfully Login.");
        navigate("/userdashboard");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Email and Password are wrong!");
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserLogin} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select
                name="role"
                defaultValue="Menufacturer"
                className="select required select-bordered w-full max-w-xs"
              >
                <option disabled>Select Your Role</option>
                <option value="Menufacturer">Menufacturer</option>
                <option value="Distributor">Distributor</option>
                <option value="Ratailer">Ratailer</option>
                <option value="TransportAgency">TransportAgency</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
