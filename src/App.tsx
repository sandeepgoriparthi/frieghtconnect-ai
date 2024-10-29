import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShipperHome from './pages/shipper/ShipperHome';
import CarrierHome from './pages/carrier/CarrierHome';
import ShipperDashboard from './pages/shipper/ShipperDashboard';
import CarrierDashboard from './pages/carrier/CarrierDashboard';
import LoginForm from './components/LoginForm';
import Layout from './components/Layout';
import ShipperPricing from './pages/shipper/ShipperPricing';
import ShipperSustainability from './pages/shipper/ShipperSustainability';
import CarrierFleet from './pages/carrier/CarrierFleet';
import CarrierEarnings from './pages/carrier/CarrierEarnings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Auth Routes */}
        <Route path="/login/:userType" element={<LoginForm />} />
        
        {/* Shipper Routes */}
        <Route path="/shipper" element={<Layout userType="shipper" />}>
          <Route index element={<ShipperHome />} />
          <Route path="dashboard" element={<ShipperDashboard />} />
          <Route path="pricing" element={<ShipperPricing />} />
          <Route path="sustainability" element={<ShipperSustainability />} />
        </Route>

        {/* Carrier Routes */}
        <Route path="/carrier" element={<Layout userType="carrier" />}>
          <Route index element={<CarrierHome />} />
          <Route path="dashboard" element={<CarrierDashboard />} />
          <Route path="fleet" element={<CarrierFleet />} />
          <Route path="earnings" element={<CarrierEarnings />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;