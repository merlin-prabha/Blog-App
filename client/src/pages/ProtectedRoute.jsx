import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("token")
  console.log(token, "token");



  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};
