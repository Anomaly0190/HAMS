import { Outlet } from "react-router-dom";
import Header from "./Components/User/Header.jsx";
import Footer from "./Components/User/Footer.jsx";


const UserLayout = () => {
  return (
    <>
    <Header />
      <Outlet /> 
    <Footer/>
    </>
  );
};

export default UserLayout;
