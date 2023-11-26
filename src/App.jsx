import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import Certificate from './pages/certificate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Include the :phonenumber parameter in the path */}
        <Route path="/certificate/:phonenumber" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
