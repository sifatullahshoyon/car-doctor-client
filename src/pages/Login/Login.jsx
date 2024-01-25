import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImg from "../../assets/assets/images/login/login.svg";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-4/5 lg:flex-row ">
          <div className="w-1/2">
            <figure>
              <img src={loginImg} alt="login" className="" />
            </figure>
          </div>
          <div className="card shrink-0  shadow-2xl w-1/2">
            <form className="card-body w-4/5 mx-auto">
              <h1 className="text-4xl font-semibold text-center text-black pb-12">
                Login
              </h1>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-lg text-black font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="input input-bordered  bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-black font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  className="input input-bordered bg-white"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-black font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn bg-my-orange hover:bg-my-orange text-white text-xl border-0 mb-7 w-full"
                />
              </div>
              <div>
                <p className="text-center font-medium text-lg text-black mb-7">
                  Or Sign In with
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-[#F5F5F8]  h-14 w-14 rounded-full flex justify-center items-center text-2xl">
                    <FaFacebookF className="bg-blue-500 text-white" />
                  </div>
                  <div className="bg-[#F5F5F8]  h-14 w-14 rounded-full flex justify-center items-center text-2xl">
                    <FaLinkedinIn className="bg-blue-500 text-white" />
                  </div>
                  <div className="bg-[#F5F5F8]  h-14 w-14 rounded-full flex justify-center items-center text-2xl">
                    <FcGoogle />
                  </div>
                </div>
                <p className="tracking-wide text-my-gray font-normal mt-12 text-center">
                  Have an account?{" "}
                  <Link to="" className="text-my-orange font-semibold ">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
