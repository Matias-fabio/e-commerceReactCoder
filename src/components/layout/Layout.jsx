import { Outlet } from "react-router-dom";
import Navbar from "./navBar/NavBar";
import Categories from "./categories/Categories";
// import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
