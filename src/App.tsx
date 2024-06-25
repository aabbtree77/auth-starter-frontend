import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import UserPage from "./components/UserPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute element={<UserPage />} redirectPath="/signin" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
