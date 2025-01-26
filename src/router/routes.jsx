import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Layouts/Public/Login";
import Register from "../Layouts/Public/Register";
import NotFound from "../components/NotFound";
import HomeLayout from "../Layouts/Public/MainLayout";
import HomePage from "../Layouts/Public/HomePage";
import LoanApplication from "../components/LoanApplication";
import Dashboard from "../components/Dashboard";
import UserLayout from "../Layouts/Admin/AdminLayout";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import AboutPage from "../components/AboutPage";
import ServicesPage from "../components/ServicePage";
import ContactPage from "../components/ContactPage";

export default function AppRoutes() {
  const { user } = useContext(UserContext);

  // Function to check if the user is an admin
  const isAdmin = user && user.role === 'admin'; // Adjust this condition based on how you manage roles

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />

        {/* Public Pages */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/apply" element={ user ?  <LoanApplication /> : <Navigate to={"/"} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Admin Pages */}
        <Route path="/admin" element={user ? (isAdmin ? <UserLayout /> : <Navigate to="/" replace />) : <Navigate to="/login" replace />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
