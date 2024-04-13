import React from "react";
import { Link } from "react-router-dom";
import Laptop2 from "../image/cover.jpg";
import Laptop from "../image/law0.png";
import Service from "../pages/Service";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="transition delay-100 w-[350px] h-[500px] mx-auto my-4"
            src={Laptop}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 font-bold uppercase">
              Learning IPC Section
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 capitalize">
              empower yourself with legal knowledge.
            </h1>
            <p>
              Unlock the depths of the{" "}
              <span className="hover:bg-yellow-200 underline transition ease-in-out delay-100">
                Indian Penal Code IPC
              </span>{" "}
              with our comprehensive resources covering every aspect of its
              sections. From understanding the foundational principles to
              dissecting the intricate nuances of each provision, our curated
              content provides a holistic approach to mastering the IPC. Delve
              into the history, evolution, and contemporary application of IPC
              sections, supplemented by insightful commentary and case studies.
            </p>
            <Link to="/Service">
              <button
                onClick={<Service />}
                className="transition ease-in-out delay-150 bg-orange-500 text-white hover:-translate-y-1 hover:scale-80 hover:bg-green-500 duration-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <hr class="w-1/3 h-1 mx-auto my-4 animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 border-0 delay-75 rounded md:my-10" />
        <div className="max-w-[1240px] grid md:grid-cols-2 md:ms-[15%] sm:ms-0">
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 font-bold uppercase">
              Learning IPC Section
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 capitalize">
              empower yourself with legal knowledge.
            </h1>
            <p>
              Unlock the depths of the{" "}
              <span className="hover:bg-yellow-200 underline transition ease-in-out delay-100">
                Indian Penal Code IPC
              </span>{" "}
              with our comprehensive resources covering every aspect of its
              sections. From understanding the foundational principles to
              dissecting the intricate nuances of each provision, our curated
              content provides a holistic approach to mastering the IPC. Delve
              into the history, evolution, and contemporary application of IPC
              sections, supplemented by insightful commentary and case studies.
            </p>
            <Link to="/Service">
              <button
                onClick={<Service />}
                className="transition ease-in-out delay-150 bg-orange-500 text-white hover:-translate-y-1 hover:scale-80 hover:bg-green-500 duration-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              >
                Get Started
              </button>
            </Link>
          </div>
          <img
            className="grayscale hover:grayscale-0 transition delay-100 w-full h-[450px] md:w-[450px] md:h-[500px] mx-auto my-4 items-end"
            src={Laptop2}
            alt="/"
          />
        </div>
        <hr class="w-1/3 h-1 mx-auto -mb-6 my-4 animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 border-0 delay-75 rounded md:my-10" />
      </div>
    </>
  );
};

export default Analytics;
