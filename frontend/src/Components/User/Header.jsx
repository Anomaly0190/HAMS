import React, { useState } from "react";
import { Link } from "react-router-dom";
import patientimage from "/patientimage.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-[98vw] h-[8vh] rounded-xl shadow-2xl mt-1 flex justify-between items-center px-6 mx-auto border-gray-400">
        <div className="cursor-pointer">Logo</div>

        <div className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/">Find a Doctor</Link>
          <Link to="/">About</Link>
        </div>

        {/* for login */}
        <div className="border-purple-600 border-2 py-1.5 px-3 cursor-pointer rounded-xl ">
          <Link to="/login" >Login</Link>
        </div>
        {/* <div
          className="relative cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <div className="rounded-full overflow-hidden w-14 h-14">
            <img
              src={patientimage}
              alt="Patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <ul
          className={`absolute right-10 top-16 bg-white border shadow-md rounded-lg w-[120px] py-2 space-y-2 transition-all duration-200 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <li className="hover:bg-gray-100 pl-2.5 ">Profile</li>
          <li className="hover:bg-gray-100 pl-2.5">Setting</li>
          <li className="hover:bg-gray-100 pl-2.5">Logout</li>
        </ul> */}
      </div>
    </>
  );
};

export default Header;
