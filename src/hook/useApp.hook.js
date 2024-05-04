import { useLocation, useNavigate } from "react-router-dom";

const useApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage?.getItem("user"));
  const handleLogout = () => {
    localStorage?.clear();
    navigate("/login");
  };

  return { location, user, handleLogout };
};

export default useApp;
