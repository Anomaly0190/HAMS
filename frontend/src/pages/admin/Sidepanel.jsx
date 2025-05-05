import { Link, NavLink } from "react-router-dom";

const Sidepanel = () => {
  return (
    <>
      <div className="w-[16vw] min-h-screen flex flex-col justify-between items-center gap-6 shadow-2xl py-16 text-xl">
        <div className="">
          <h2>Admin Panel 
            <span>😎</span>
          </h2>
        </div>
        <div className="">
            <ul> 

                <li><NavLink 
                to="/admin/admindashboard" 
                className={({isActive})=>`${isActive?"text-orange-400":""}`}>Dashboard</NavLink></li>
                <li><NavLink to="/dashboard">
                <span>😷</span>
                ManagePatient</NavLink></li>
                <li><NavLink to="#">ManageDoctor</NavLink></li>
                <li><NavLink to="#">Setting</NavLink></li>
            </ul>
        </div>
        <div className="text-red-500 hover:text-red-600 font-semibold ">
            <span>🚪</span>
            logout
        </div>
      </div>
    </>
  );
};

export default Sidepanel;
