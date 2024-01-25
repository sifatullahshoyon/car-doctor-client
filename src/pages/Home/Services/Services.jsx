import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    try {
      fetch("/data/services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    } catch (error) {
      console.error(error.massage);
    }
  }, []);
  return (
    <div className="mb-32">
      <p className="text-xl text-my-orange font-bold text-center mb-5">
        Service
      </p>
      <h1 className="font-bold text-black text-5xl leading-normal text-center mb-5">
        Our Service Area
      </h1>
      <p className="text-base font-normal text-my-gray leading-7 text-center mb-12">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="btn btn-error bg-transparent text-my-orange border-my-orange hover:bg-my-orange hover:text-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
