import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps {
  element: ReactNode;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  redirectPath = "/",
}) => {
  const { loggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return loggedIn ? element : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
