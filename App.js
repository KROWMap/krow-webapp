import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VendorDashboard from "./pages/VendorDashboard";
import UserDashboard from "./pages/UserDashboard";
import MapView from "./pages/MapView";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import firebase from "./firebase";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
