import { NavLink, Outlet } from "react-router-dom";
import { FaDAndD, FaHome, FaUser } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const { user } = useAuth();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-6">
        <ul>
          {isAdmin && (
            <li className="flex gap-6 items-center">
              <FaUser />
              <NavLink to="/dashboard/allusers">All Users</NavLink>
            </li>
          )}
          {isAdmin && (
            <li className="flex gap-6 items-center">
              <FaDAndD />
              <NavLink to="/dashboard/additems">Add Items</NavLink>
            </li>
          )}
          {user && (
            <li className="flex gap-6 items-center">
              <FaHome />
              <NavLink to="/dashboard/oders">My Cart</NavLink>
            </li>
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
