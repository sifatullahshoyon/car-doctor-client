import React from "react";
import person from "../../../assets/assets/images/about_us/person.jpg";
import parts from "../../../assets/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero mb-32">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={person}
              className="w-3/4 h-[473px] object-fill rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className="w-1/2 h-[332px] object-fill rounded-lg absolute right-5 top-1/2 shadow-2xl border-8 border-white"
            />
          </div>
          <div className="lg:w-1/2 pl-4">
            <h3 className="text-xl font-bold text-my-orange mb-5">About Us</h3>
            <p className="font-bold text-black text-5xl leading-normal">
              We are qualified
              <br /> & of experience
              <br /> in this field
            </p>
            <p className="text-base font-normal text-my-gray leading-7 mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <p className="text-base font-normal text-my-gray leading-7 mb-8">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="btn  bg-my-orange hover:bg-my-orange border-0 text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
