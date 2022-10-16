import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const [errorPassword, setErrorPassword] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password.length < 8) {
      setErrorPassword("Password should be 8 character or more!!");
    } else if (password !== confirm) {
      setErrorPassword("Your password did not match!!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex justify-center items-center"
    >
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="mt-6 text-center text-4xl font-bold text-blue-900 uppercase">
          Register
        </h2>
        <form onSubmit={handleFormSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
            />
          </div>
          <p className="text-red-600">{errorPassword}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <Link to="/login">
            Create Account?
            <button className="btn btn-link capitalize ">Log In here</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
