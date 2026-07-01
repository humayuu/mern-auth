import { Routes, Route } from "react-router-dom";
import Welcome from "../welcome.jsx";
import Dashboard from "../dashboard.jsx";
import Login from "../login.jsx";
import Signup from "../signup.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
