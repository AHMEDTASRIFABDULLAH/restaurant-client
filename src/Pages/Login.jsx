import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/others/authentication2.png";
import slide from "../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const captchaRef = useRef(null);
  const { loginUser } = useContext(AuthContext);
  const [capErr, setCapErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const val = captchaRef.current.value;
    console.log(val);
    if (validateCaptcha(val) == true) {
      console.log("captcha is working");
    } else {
      setCapErr("type right captch");
    }
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${slide})`,
      }}
      className="flex justify-center items-center p-6"
    >
      <div
        style={{
          backgroundImage: `url(${slide})`,
        }}
        className="flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl "
      >
        <div className="hidden bg-cover lg:flex justify-center items-center bg-center lg:block lg:w-1/2">
          <img src={logo} alt="" />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="" alt="" />
          </div>

          <p className="mt-3 text-xl font-semibold text-center text-gray-600 ">
            Login
          </p>

          <form onSubmit={handleSignIn}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-semibold text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-semibold text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-4">
              <LoadCanvasTemplate />
            </div>
            {/* text aaa */}
            <div className="mt-4">
              <textarea
                ref={captchaRef}
                id="loggingPassword"
                autoComplete="current-password"
                name="captcha"
                placeholder="Type here"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                required
              />
            </div>
            <p className="mt-2 text-red-700">{capErr}</p>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D1A054] rounded-lg hover:bg-[#ba8940] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
            <p className="text-[#D1A054] text-center my-4">
              New here? Create a New Account
            </p>
          </form>

          <div className="text-center mt-4">
            <Link
              to="/signup"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
