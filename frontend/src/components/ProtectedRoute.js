import React from "react";
import { Navigate } from "react-router-dom";
import { useRBAC } from "../context/RBACContext";

const ProtectedRoute = ({ children, requiredPermission, roleId }) => {
  const { hasPermission } = useRBAC();

  return hasPermission(roleId, requiredPermission) ? (
    children
  ) : (
    <Navigate to="/403" />
  );
};

export default ProtectedRoute;
