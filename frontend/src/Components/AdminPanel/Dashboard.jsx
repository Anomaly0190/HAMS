import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Dashboard = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <div>
      <section>
        <div className=" w-[12vw] md:w-[20vw] bg-yellow-400 min-h-screen">
          
        </div>
        <div className="absolute top-1 left-1.5">
            <HiMenu className="text-3xl text-blue-700" />
          </div>
      </section>
    </div>
  );
};

export default Dashboard;
