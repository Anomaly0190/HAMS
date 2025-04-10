import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "/logo1.jpg";
import { HiMenu, HiX } from "react-icons/hi"; // Menu & Close icons

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-[98vw] h-[12vh] rounded-xl mt-2 border-t-2 border-blue-300 flex justify-between items-center px-6 mx-auto shadow-blue-500 shadow-lg relative z-50 bg-white">
      {/* Logo */}
      <div className="cursor-pointer">
        <img src={logo1} alt="Logo" className="h-[10vh]" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/" className="hover:underline">Find a Doctor</Link>
        <Link to="/" className="hover:underline">About</Link>
      </nav>

      {/* Login Button */}
      <div className="hidden md:block py-2 px-4 cursor-pointer rounded-xl bg-blue-600 text-white">
        <Link to="/login">Login</Link>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <HiX className="text-3xl text-blue-700" />
          ) : (
            <HiMenu className="text-3xl text-blue-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-[12vh] left-0 w-full bg-white shadow-md border-t rounded-b-xl md:hidden flex flex-col items-center py-4 space-y-4">
          <Link to="/" onClick={() => setShowMenu(false)} className="hover:underline">Home</Link>
          <Link to="/" onClick={() => setShowMenu(false)} className="hover:underline">Find a Doctor</Link>
          <Link to="/" onClick={() => setShowMenu(false)} className="hover:underline">About</Link>
          <Link to="/login" onClick={() => setShowMenu(false)} className="py-2 px-4 bg-blue-600 text-white rounded-xl">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
