import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Certificate = () => {
  const navigate = useNavigate();
  const { phNumber } = useParams();
  const [participant, setParticipant] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState('tachi');

  useEffect(() => {
    fetch(`/api/participants/${phNumber}`)
      .then((response) => response.json())
      .then((data) => setParticipant(data))
      .catch((error) => console.error('Error fetching participant data:', error));
  }, [phNumber]);

  const handleBack = () => {
    navigate('/');
  };

  const handleBackgroundChange = (event) => {
    setSelectedBackground(event.target.value);
  };

  const handleGenerateCertificate = () => {
    if (participant) {
      // Create a URL with the certificate data
      const certificateURL = `/certificate/${phNumber}/generate?background=${selectedBackground}`;

      // Open the certificate in a new tab
      window.open(certificateURL, '_blank');
    } else {
      console.error('Participant not found');
    }
  };

  return (
    <div>
      <div className="bg-gray-900">
        <nav className="container mx-auto flex items-center justify-between p-3">
          <div className="flex items-center">
            <button
              className="mx-2 my-1 text-white hover:text-gray-200"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
          <div className="flex items-center">
            {/* Add additional navbar items as needed */}
          </div>
        </nav>
      </div>
      <div className="relative bg-white mt-20 flex flex-row items-center justify-center">
        <div className="h-2/5 w-2/5 flex flex-col items-center justify-center">
          <img className="" src={`/certificate_placeholder_${selectedBackground}.png`} alt="Logo" />
          <div className="flex flex-col items-center mt-4">
            <p className="text-bold">เลือกพื้นหลังเกียรติบัตร</p>
            <select
              className="mt-2 px-4 py-2 rounded-md border border-gray-400 w-full max-w-md"
              onChange={handleBackgroundChange}
            >
              <option value="tachi">ROV : Tachi</option>
              <option value="illumia">ROV : Illumia</option>
              <option value="grakk">ROV : Grakk</option>
            </select>
            <button
              className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded cursor-pointer"
              onClick={handleGenerateCertificate}
            >
              บันทึกเป็น PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
