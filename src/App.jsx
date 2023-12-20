import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import Certificate from './pages/certificate';
import LandingPage from './pages/landing';
import Navbar from './component/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/certificate" element={<LoginPage />} />
          <Route path="/certificate/:phonenumber" element={<Certificate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
