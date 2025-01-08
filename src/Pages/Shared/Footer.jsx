import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className=" sm:flex  text-white ">
        <div className="bg-[#1F2937] sm:w-1/2 p-20 space-y-6">
          <h1 className="text-xl">CONTACT US</h1>
          <div className="space-y-2 text-xs">
            <p>
              123 ABS Street, Uni 21, Bangladesh <br />
            </p>
            <p> +88 123456789</p>
            <p> Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] sm:w-1/2 p-20">
          <h1 className="text-xl mb-4">Follow US</h1>
          <p className="text-xs">Join us on social media</p>
          <div className="flex font-medium text-white text-2xl gap-4 mt-4 ">
            <FaSquareFacebook />
            <IoLogoInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-black  p-4">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
