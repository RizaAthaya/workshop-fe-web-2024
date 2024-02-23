import React from "react";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default ProtectedRoute;
