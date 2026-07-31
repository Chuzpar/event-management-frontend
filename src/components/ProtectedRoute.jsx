import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Temporary authentication
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;