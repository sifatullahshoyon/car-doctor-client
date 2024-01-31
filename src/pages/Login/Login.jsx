import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";

const Login = () => {
    const {signIn , googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email , password)
        .then(result => {
            const user = result.user;
            
            console.log(user);
            navigate(from , {replace : true})
           
            form.reset();
            toast.success('User Login Successfully.')
        })
        .catch(error => {
            console.error(error);
            toast.error(error.message);
        })
    };

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            toast.success('User Login Successfully');
        })
        .catch(err => {
            toast.error(err.message);
        })
    };

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
            <form onSubmit={handleLogin} className="card-body w-4/5 mx-auto">
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
                  <div onClick={handleGoogleLogin} className="bg-[#F5F5F8]  h-14 w-14 rounded-full flex justify-center items-center text-2xl">
                    <FcGoogle />
                  </div>
                </div>
                <p className="tracking-wide text-my-gray font-normal mt-12 text-center">
                  New To Car Doctors?{" "}
                  <Link to="/signUp" className="text-my-orange font-semibold ">
                    Sign Up
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
