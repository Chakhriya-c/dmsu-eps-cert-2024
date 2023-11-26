import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login'; // Import the components directly
import Certificate from './pages/certificate'; // Import the components directly

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
