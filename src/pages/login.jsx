import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [views, setViews] = useState(0);
  const [pageLoadTime, setPageLoadTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirmation = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        phoneNumber,
      });

      console.log('Login response:', response);

      if (response.data.success) {
        navigate(`/certificate/${phoneNumber}`);
      } else {
        // Update the error message state
        setErrorMessage(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Update the error message state for catch block
      setErrorMessage('An error occurred during login, please contact admin');

      // You might also want to log the specific error to the console
      console.error('Error in catch block:', error);
    }
  };

  useEffect(() => {
    // Update views count (replace 'yourApiEndpoint' with the actual endpoint)
    axios.get('yourApiEndpoint/views').then((response) => {
      setViews(response.data.views);
    });

    // Measure page load time
    const loadTimeStart = performance.timing.navigationStart;
    const loadTimeEnd = new Date().getTime();
    const loadTime = loadTimeEnd - loadTimeStart;
    setPageLoadTime(loadTime);
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Function to handle input change and filter out non-numeric characters
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    // Use a regular expression to keep only numeric characters
    const numericInput = input.replace(/[^0-9]/g, '');
    setPhoneNumber(numericInput);
  };

  return (
    <div className="relative h-screen w-screen bg-black flex flex-col items-center justify-center">
      <img
        className="w-20 h-20 absolute top-8 right-8"
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
            className="mt-1 mb-5 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-sky-500
            "
            placeholder='เบอร์โทรศัพท์'
            value={phoneNumber}
            onChange={handlePhoneNumberChange} // Use the custom handler
          />
        </div>
        <input
          type="button"
          value="ยืนยัน"
          onClick={handleConfirmation}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer mx-auto"
        />
      </div>
      <div id='error-message' className="text-red-500 mt-8 flex flex-col items-center justify-end">
        {/* Display the error message */}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className="text-black mt-8 flex flex-col items-center justify-end">
        <p>Views: {views}</p>
        <p>Page Load Time: {pageLoadTime} ms</p>
      </div>
    </div>
  );
};

export default LoginPage;