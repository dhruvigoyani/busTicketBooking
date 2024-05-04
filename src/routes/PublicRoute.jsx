import { Navigate, Outlet } from "react-router-dom";
import { ternary } from "../utils/javascript";

const PublicRoute = () => {
  const user = JSON.parse(localStorage?.getItem("user"));
  return ternary(!user, <Outlet />, <Navigate to={"/"} />);
};

export default PublicRoute;
