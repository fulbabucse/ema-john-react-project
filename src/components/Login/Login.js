import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex justify-center items-center"
    >
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="mt-6 text-center text-4xl font-bold text-blue-900 uppercase">
          Log In
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <Link to="/register">
            Create Account?
            <button className="btn btn-link capitalize ">Register here</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
