import useAuth from "../auth/Auth";

const PrivatePart = ({ children }) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <>{children}</> : '';
};

export default PrivatePart;