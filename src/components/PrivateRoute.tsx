import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../authStore";

const PrivateRoute = () => {
  const { token } = useAuthStore();

  if (!token) return <Navigate to="/" />;

  return <Outlet />;
};

export default PrivateRoute;
