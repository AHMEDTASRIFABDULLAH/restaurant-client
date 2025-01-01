import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Root = () => {
  const location = useLocation();
  const offHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="max-w-screen-2xl mx-auto">
      {offHeaderFooter || <NavBar />}
      <Outlet />
      {offHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
