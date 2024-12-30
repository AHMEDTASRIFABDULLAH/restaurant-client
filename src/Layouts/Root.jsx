import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
