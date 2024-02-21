import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRole = () => {
  const { token, role } = useSelector((store) => store.userInfo);
  if (token && role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRole;
