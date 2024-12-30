import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
const NavBar = () => {
  return (
    <div>
      <div className=" fixed w-full py-4 z-10 max-w-screen-2xl bg-opacity-30 text-white bg-black">
        <div className="flex justify-between items-center ">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu w-[250px]  menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3  p-2 shadow"
            >
              <div className=" flex flex-col gap-3 p-6 text-white">
                <NavLink className="uppercase font-semibold border-b py-2">
                  Home
                </NavLink>
                <NavLink className="uppercase font-semibold">
                  CONTACT us
                </NavLink>
                <NavLink className="uppercase font-semibold">DASHBOARD</NavLink>
                <NavLink to="menu" className="uppercase font-semibold">
                  Our Menu
                </NavLink>
                <NavLink className="uppercase font-semibold">Our Shop</NavLink>
              </div>
            </ul>
          </div>
          <div className="px-4 lg:block hidden">
            <h1 className="text-xl">BISTRO BOSS</h1>
            <h1 className="cinzel">Restaurant</h1>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="p-2 relative bg-green-700 rounded-full block lg:hidden">
              <BsCart4 className="text-2xl" />
              <span className="rounded-full w-5 h-5 flex justify-center items-center top-5 bottom-0 right-0  bg-red-800 absolute">
                4
              </span>
            </h1>
            <NavLink className="uppercase  lg:hidden text-base-300 font-semibold">
              LogOut
            </NavLink>
            <img
              className="w-9 h-9 border-4 lg:hidden rounded-full mr-4"
              src="sad"
              alt=""
            />
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-6 pr-6 ">
              <NavLink className="uppercase">Home</NavLink>
              <NavLink className="uppercase">CONTACT us</NavLink>
              <NavLink className="uppercase">DASHBOARD</NavLink>
              <NavLink to="menu" className="uppercase">
                Our Menu
              </NavLink>
              <NavLink className="uppercase">Our Shop</NavLink>
              <h1 className="p-2 relative bg-green-700 rounded-full">
                <BsCart4 className="text-2xl" />
                <span className="rounded-full w-5 h-5 flex justify-center items-center top-5 bottom-0 right-0  bg-red-800 absolute">
                  4
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <NavLink className="uppercase hidden lg:block text-base-300 font-semibold">
                  LogOut
                </NavLink>
                <img
                  className="w-9 h-9 border-4 lg:block hidden rounded-full mr-4"
                  src="sad"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
