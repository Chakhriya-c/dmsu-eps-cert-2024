import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('./pages/login'));
const Certificate = lazy(() => import('./pages/certificate'));

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
