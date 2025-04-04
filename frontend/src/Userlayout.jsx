import { Outlet } from "react-router-dom";
import Header from "./Components/User/Header.jsx";
import Footer from "./Components/User/Footer.jsx";


const UserLayout = () => {
  return (
    <div className="w-full h-full">
    <Header />
      <Outlet /> 
    <Footer/>
    
    </div>
  );
};

export default UserLayout;
