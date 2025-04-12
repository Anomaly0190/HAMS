import React from "react";
import { Link } from "react-router-dom";
import docimage from "/docimage.jpg";
import SliderImage from "./SliderImage.jsx";

const Home = () => {
  return (
    <div className="w-full pt-[16vh]">
      <section className="py-10 px-4 md:py-20 w-full min-h-[88vh] flex items-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mx-auto w-full max-w-7xl">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-6">
              Your Health, <span className="text-blue-500">Our Priority</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 px-2 sm:px-0">
              Welcome to a smarter way to manage your health. Schedule
              appointments, track wellness, and get care from trusted
              professionals — All in one place.
            </p>
            <Link
              to="/login"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Login to Book Appointment
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={docimage}
              alt="Healthcare Illustration"
              className="w-[80%] sm:w-[60%] md:w-[28vw] max-w-xs md:max-w-none rounded-2xl shadow-lg shadow-red-400"
            />
          </div>
        </div>
      </section>

      <SliderImage />
    </div>
  );
};

export default Home;
