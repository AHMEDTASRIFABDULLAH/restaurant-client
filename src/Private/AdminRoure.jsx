import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoure = ({ children }) => {
  const { user, loding } = useAuth();
  const [isAdmin, adminLoading] = useAdmin();
  let location = useLocation();
  if (loding || adminLoading) {
    return <span className="loading loading-spinner loading-xs"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <>
      <Navigate to="/" state={{ from: location }} replace />
    </>
  );
};

export default AdminRoure;
