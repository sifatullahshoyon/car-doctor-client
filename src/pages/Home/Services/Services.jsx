import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const handleSearch = () => {
    // console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };
  useEffect(() => {
    try {
      fetch(
        `https://car-doctor-server-4381olhpf-sifat-ullah-shoyons-projects.vercel.app/services?search=${search}&sort=${
          isAscending ? "asc" : "dsc"
        }`
      )
        .then((res) => res.json())
        .then((data) => setServices(data));
    } catch (error) {
      console.error(error.massage);
    }
  }, [isAscending, search]);
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
      <div className="mx-auto">
        <div className="join">
          <div>
            <div>
              <input
                ref={searchRef}
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="indicator">
            <button
              onClick={handleSearch}
              className="btn btn-primary join-item"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button
          onClick={() => setIsAscending(!isAscending)}
          className="btn btn-info"
        >
          {isAscending ? "Price : Low To High" : "Price : High To Low"}
        </button>
      </div>
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
