import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./Components/Footer.jsx";


const UserLayout = () => {
  return (
    <div className="w-full">
    <Header  />
      <Outlet  /> 
    <Footer/>
    
    </div>
  );
};

export default UserLayout;
