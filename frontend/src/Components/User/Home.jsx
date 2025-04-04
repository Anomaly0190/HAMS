import React from "react";
import { Link } from "react-router-dom";
import docimage from "/docimage.jpg";
const Home = () => {
  return (
    <>
      <section class=" py-20 px-4  w-full">
        <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mx-auto w-[86%]">
          <div class="md:w-1/2 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-6">
              Your Health, <span class="text-blue-500">Our Priority</span>
            </h1>
            <p class="text-gray-600 text-lg mb-6">
              Welcome to a smarter way to manage your health. Schedule
              appointments, track wellness, and get care from trusted
              professionals — All in one place.
            </p>
            <Link
              to="/login"
              class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Login to Book Appointment
            </Link>
          </div>

          <div class=" shadow-lg overflow-hidden">
            <img
              src={docimage}
              alt="Healthcare Illustration"
              class="w-[28vw] rounded-2xl shadow-lg overflow-hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
