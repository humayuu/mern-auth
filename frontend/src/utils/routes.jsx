import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../welcome";
import Dashboard from "../dashboard";
import Login from "../login";
import Signup from "../signup";
import ProtectedRoute from "./protected-routes.jsx";

const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" replace /> : <Welcome />}
      />

      <Route
        path="/login"
        element={token ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route
        path="/signup"
        element={token ? <Navigate to="/dashboard" replace /> : <Signup />}
      />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to={token ? "/dashboard" : "/"} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
