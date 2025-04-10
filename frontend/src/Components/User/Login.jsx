import React, { useState } from "react";
import loginside from "/loginside.webp";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const datas = {
  role: ["User", "Doctor"],
};

const Login = () => {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-50">
        <div className="w-[90vw] md:w-[64vw] h-auto md:h-4/5 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden bg-white text-black">
          <div className="w-full md:w-[35vw]">
            <img
              src={loginside}
              alt="sideimage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 h-full">
            <div className="bg-white py-4 px-5 md:px-10">
              <h2 className="text-3xl font-semibold mb-6 mt-4 text-center md:text-left">
                <span className="text-[#0A7ABF]">Welcome</span>
                <span className="text-[#333333]">Back</span>
              </h2>
              <form className="space-y-3 w-full">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="w-full">
                    <label className="w-full input input-bordered flex items-center gap-2 border-1 border-black focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-400 bg-white text-black">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div>
                    <label className="w-full input input-bordered flex items-center gap-2 border-1 border-black focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-400 bg-white text-black">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                          <circle
                            cx="16.5"
                            cy="7.5"
                            r=".5"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        className="w-full focus:outline-none"
                      />
                      {showPassword ? (
                        <FaEyeSlash
                          className="cursor-pointer text-xl mr-2"
                          onClick={() => setShowpassword((prev) => !prev)}
                        />
                      ) : (
                        <FaEye
                          className="cursor-pointer text-xl mr-2"
                          onClick={() => setShowpassword((prev) => !prev)}
                        />
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex w-full my-4 flex-col sm:flex-row items-start sm:items-center">
                  <label>Are you a</label>
                  <select
                    name=""
                    id=""
                    className="ml-0 sm:ml-3 mt-2 sm:mt-0 outline-2 rounded-sm border border-gray-300 p-1"
                  >
                    {datas.role.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex flex-col sm:flex-row sm:justify-end my-4 text-[1rem]">
                  <h1>
                    Don't have an Account?{" "}
                    <span className="text-blue-500">
                      <Link to="/register">Register</Link>
                    </span>
                  </h1>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
