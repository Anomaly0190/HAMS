import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuth } from "../Utils/AuthProvider";
import toast from "react-hot-toast";

import logo1 from "/logo1.jpg";
import patientimage from "/patientimage.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [confirmlogout, setConfirmlogout] = useState(false);
  const lastScroll = useRef(0);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setVisible(false);
        setShowMenu(false)
      } else {
        setVisible(true);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout(); // use the context logout function
    toast.success("Logout Success");
    navigate("/");
  };

  return (
    <>
      <header
        className={`fixed top-0 w-[93vw] sm:w-[94vw] md:w-[95vw] lg:w-[98vw] h-[12vh] rounded-xl mt-2 border-t-2 border-blue-300 flex justify-between items-center px-6 mx-3 shadow-blue-500 shadow-lg z-50 bg-white transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="cursor-pointer">
          <img src={logo1} alt="Logo" className="h-[10vh]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Find a Doctor
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex md:flex items-center gap-4">
          {user &&(
            <>
              <div className="rounded-full overflow-hidden w-14 h-14">
                <img
                  src={patientimage}
                  alt="Patient"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={() => setConfirmlogout(true)}
                className="py-2 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600 hidden md:block"
              >
                Logout
              </button>
            </>
          ) }
          {!user && (
            <Link
              to="/login"
              className="py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Login
            </Link>
          )}
          
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <HiX className="text-3xl text-blue-700" />
            ) : (
              <HiMenu className="text-3xl text-blue-700" />
            )}
          </button>
        </div>

        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="absolute top-[12vh] left-0 w-full bg-white shadow-md border-t rounded-b-xl md:hidden flex flex-col items-center py-4 space-y-4 z-40">
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="hover:underline "
            >
              Find a Doctor
            </Link>
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="hover:underline"
            >
              About
            </Link>
            {user && (
              <div>
                
                <button
                  onClick={() => setConfirmlogout(true)}
                  className="py-2 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) }
          
          </div>
        )}
      </header>
      <div
        className={`fixed w-[100vw] h-[100vh]  z-50 flex justify-center items-center bg-[#0000007d] ${
          confirmlogout ? "block" : "hidden"
        }`}
      >
        <div className="w-[70%] md:w-[32%] h-[30%] md:h-[36%] bg-white rounded-2xl shadow-sm md:py-10 md:px-8 lg:py-12 lg:px-16 py-10 px-6">
          <h1 className="md:text-xl lg:text-2xl text-center">Are you sure you want to logout ?</h1>
          <div className="flex items-center justify-between mt-14 pt-4 px-3">
            <button
              className="bg-blue-500 rounded-2xl p-2 w-20 hover:bg-blue-600 cursor-pointer text-gray-200"
              onClick={() => {
                handleLogout();
                setShowMenu(false);
                setConfirmlogout(false);
              }}
            >
              Yes
            </button>
            <button
              className="bg-blue-500 rounded-2xl p-2 w-20 hover:bg-blue-600 cursor-pointer text-gray-200"
              onClick={() => setConfirmlogout(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
