import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Features from "./pages/Features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/signup"
    element={<Signup />}
  />

  <Route
    path="/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/reports"
    element={<Reports />}
  />

  <Route
    path="/features"
    element={<Features />}
  />

  <Route
    path="*"
    element={<Home />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;