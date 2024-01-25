import React from "react";
import logo from "../../../assets/assets/icons/logo.svg";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-background text-white">
      <div className="container mx-auto footer px-10 pt-20 pb-10">
        <aside>
          <figure>
            <img src={logo} alt="" />
          </figure>
          <p className="text-xs leading-6 text-secondary my-5 font-normal">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br /> trainer who is also a serial .
          </p>
          <div className="flex gap-2 ">
            <div className="bg-[#2C2C2C]  h-9 w-9 rounded-full flex justify-center items-center">
              <FaGoogle />
            </div>
            <div className="bg-[#2C2C2C]  h-9 w-9 rounded-full flex justify-center items-center">
              <FaTwitter />
            </div>
            <div className="bg-[#2C2C2C]  h-9 w-9 rounded-full flex justify-center items-center">
              <FaInstagram />
            </div>
            <div className="bg-[#2C2C2C]  h-9 w-9 rounded-full flex justify-center items-center">
              <FaLinkedin />
            </div>
          </div>
        </aside>
        <nav>
          <h6 className=" text-white text-xl font-semibold mb-10">About</h6>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Home
          </a>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Service
          </a>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className=" text-white text-xl font-semibold mb-10">Company</h6>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Why Car Doctor
          </a>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            About
          </a>
        </nav>
        <nav>
          <h6 className=" text-white text-xl font-semibold mb-10">Support</h6>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Support Center
          </a>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Feedback
          </a>
          <a className="link link-hover text-base text-my-bg font-normal mb-2">
            Accessibility
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
