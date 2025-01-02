import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  let location = useLocation();
  if (loding) {
    return <span className="loading loading-spinner loading-xs"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login" state={{ from: location }} replace />
    </>
  );
};

export default PrivateRoute;
