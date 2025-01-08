import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-6">
        <ul>
          {isAdmin ? (
            <>
              <li className="flex gap-6 items-center">
                <FaHome />
                <NavLink to="/dashboard/allusers">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex gap-6 items-center">
                <FaHome />
                <NavLink to="/dashboard/oders">My Cart</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="uppercase flex gap-6 items-center">
            <FaHome />
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
