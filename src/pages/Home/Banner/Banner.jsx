import React from "react";
import img1 from "../../../assets/assets/images/banner/1.jpg";
import img2 from "../../../assets/assets/images/banner/2.jpg";
import img3 from "../../../assets/assets/images/banner/3.jpg";
import img4 from "../../../assets/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={img1} className="w-full rounded  bg-center bg-contain" />
          <div className="absolute flex justify-start items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white w-1/2 pl-24 space-y-7">
              <h1 className="text-6xl font-bold leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg text-white leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-error bg-my-orange hover:bg-my-orange mr-5">
                  Discover More
                </button>
                <button className="btn btn-error bg-transparent text-white border-white hover:bg-my-orange">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0  ml-5"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded  bg-center bg-contain" />
          <div className="absolute flex justify-start items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white w-1/2 pl-24 space-y-7">
              <h1 className="text-6xl font-bold leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg text-white leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-error bg-my-orange hover:bg-my-orange mr-5">
                  Discover More
                </button>
                <button className="btn btn-error bg-transparent text-white border-white hover:bg-my-orange">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0  ml-5"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded  bg-center bg-contain" />
          <div className="absolute flex justify-start items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white w-1/2 pl-24 space-y-7">
              <h1 className="text-6xl font-bold leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg text-white leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-error bg-my-orange hover:bg-my-orange mr-5">
                  Discover More
                </button>
                <button className="btn btn-error bg-transparent text-white border-white hover:bg-my-orange">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0  ml-5"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded  bg-center bg-contain" />
          <div className="absolute flex justify-start items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white w-1/2 pl-24 space-y-7">
              <h1 className="text-6xl font-bold leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg text-white leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-error bg-my-orange hover:bg-my-orange mr-5">
                  Discover More
                </button>
                <button className="btn btn-error bg-transparent text-white border-white hover:bg-my-orange">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-my-orange hover:bg-my-orange border-0  ml-5"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;