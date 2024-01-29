import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImg from "../../assets/assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";

const SignUp = () => {
    const {createUser , googleLogin} = useContext(AuthContext);


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        // Password Validation
        if(!/(?=.*?[a-z])/.test(password)){
            toast.error('Please Enter Min 1 uppercase letter');
            return;
        }
        else if(!/(?=.*?[A-Z])/.test(password)){
            toast.error('Please Enter Min 1 uppercase letter');
            return;
        }
        else if(!/(?=.*?[0-9])/.test(password)){
            toast.error('Please Enter At least one digit');
            return;
        }
        else if(!/.{8,}/.test(password)){
            toast.error('Password Minimum eight in length');
            return;
        }

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('User Create Successfully.')
        })
        .catch(err => {
            console.error(err);
            toast.error(err.message);
        })
    };

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            toast.success('User Create Successfully');
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
            <form onSubmit={handleSignUp} className="card-body w-4/5 mx-auto">
              <h1 className="text-4xl font-semibold text-center text-black pb-12">
                Sign Up
              </h1>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-lg text-black font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered  bg-white"
                  required
                />
              </div>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-lg text-black font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
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
                  value="Sign Up"
                  className="btn bg-my-orange hover:bg-my-orange text-white text-xl border-0 mb-7 w-full"
                />
              </div>
              <div>
                <p className="text-center font-medium text-lg text-black mb-7">
                  Or Sign Up with
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
                    Already have an account?{" "}
                  <Link to="/login" className="text-my-orange font-semibold ">
                    Login
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

export default SignUp;