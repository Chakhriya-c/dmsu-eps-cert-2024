import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleConfirmation = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/login',
        { phoneNumber }
      );

      console.log('Login response:', response);

      if (response.data.success) {
        alert('Login successful');
        navigate(`/certificate/${phoneNumber}`); // Update the navigation to include the phone number
      } else {
        alert(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
  };
  
  return (
    <div className="relative h-screen w-screen bg-black flex flex-col items-center justify-center">
      <img
        className="w-20 h-20 absolute top-3 right-0"
        src="/dmsulogo_2.png"
        alt="Logo"
      />
      <img className="h-1/3" src="/logo.jpg" alt="Logo" />
      <p className="text-white font-bold text-lg mb-1">
        Certificate Redeem for EPS Day 2024
      </p>
      <p className="text-white mb-4">
        กรอกเบอร์โทรศัพท์ที่ลงทะเบียนเพื่อรับเกียรติบัตร
      </p>
      <div className="text-center">
        <div>
          <input
            type="text"
            id="phnum"
            className="border rounded-md mb-4"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <input
          type="button"
          value="ยืนยัน"
          onClick={handleConfirmation}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer mx-auto"
        />
      </div>
    </div>
  );
};

export default LoginPage;
