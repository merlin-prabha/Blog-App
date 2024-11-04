import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  console.log(token, "token");
  console.log(user, "user");
  



  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};
