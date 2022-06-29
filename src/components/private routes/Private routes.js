import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/Auth";

const PrivateRoutes = () => {
  const isLoggedIn = useAuth().isLoggedIn;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;