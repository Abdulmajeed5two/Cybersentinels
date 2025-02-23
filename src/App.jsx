import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Layout from "./Dashboard/components/Layout";
import FraudDetection from "./Dashboard/pages/FraudDetection";
import DashboardHome from "./Dashboard/pages/DashboardHome";
import DeepfakePrevention from "./Dashboard/pages/DeepfakePrevention";
import UserPrivacy from "./Dashboard/pages/UserPrivacy";
import UserCases from "./Dashboard/pages/UserCases";
import ContentRemoval from "./Dashboard/pages/ContentRemoval";
import HiddenCameraDetection from "./Dashboard/pages/HiddenCameraDetection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dash" element={<Layout />}>
          <Route index element={<DashboardHome />} />
          <Route path="fraud-detection" element={<FraudDetection />} />
          <Route path="deepfake-prevention" element={<DeepfakePrevention />} />
          <Route path="user-privacy" element={<UserPrivacy />} />
          <Route path="content-removal" element={<ContentRemoval />} />
          <Route path="cases" element={<UserCases />} />
          <Route path="hidden-camera-detection" element={<HiddenCameraDetection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
