import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Certificate = () => {
  const navigate = useNavigate();
  const { phonenumber } = useParams();
  const [participant, setParticipant] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState('tachi');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipantData = async () => {
      try {
        const response = await fetch(`/api/participants/${phonenumber}`);
        console.log("Response:", response);
        
        if (!response.ok) {
          handleFetchError(response);
          return;
        }
    
        const contentType = response.headers.get('content-type');
    
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          
          if (data.success) {
            setParticipant(data.participant);
          } else {
            setError(data.message || 'Failed to fetch participant data');
          }
        } else {
          handleInvalidContentType(contentType, response);
        }
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };
    
    const fetchDataFromBackend = async () => {
      if (phonenumber) {
        try {
          const backendResponse = await fetch(`http://localhost:3001/api/participants/${phonenumber}`);
          const backendData = await backendResponse.json();

          if (backendResponse.ok) {
            setParticipant(backendData.participant);
          } else {
            setError(backendData.message || 'Failed to fetch participant data from backend');
          }
        } catch (error) {
          handleError(error);
        } finally {
          setLoading(false);
        }
      } else {
        setError('Invalid phonenumber');
        setLoading(false);
      }
    };

    fetchDataFromBackend();
  }, [phonenumber]);

  const handleFetchError = (response) => {
    console.error('Failed to fetch participant data:', response.status, response.statusText);
    setError('Failed to fetch participant data');
  };

  const handleInvalidContentType = (contentType, response) => {
    console.error('Invalid content type. Expected application/json, but received:', contentType);
    setError(`Invalid content type: ${contentType}`);
    response.text().then((responseBody) => {
        console.log('Response body:', responseBody);
    });
};



  const handleError = (error) => {
    console.error('Error fetching participant data:', error);
    setError('Error fetching participant data');
    // Handle other errors here if needed
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleBackgroundChange = (event) => {
    setSelectedBackground(event.target.value);
  };

  const handleGenerateCertificate = () => {
    if (participant) {
      const certificateURL = `/certificate/${phonenumber}/generate?background=${selectedBackground}`;
      window.open(certificateURL, '_blank');
    } else {
      console.error('Participant not found');
    }
  };

  const certificateImageURL = `/certificate_placeholder_${selectedBackground}.png`;

  return (
    <div>
      {/* Add your header and navigation code here if needed */}
      <div className="relative bg-white mt-20 flex flex-row items-center justify-center">
        <div className="h-2/5 w-2/5 flex flex-col items-center justify-center">
          <img className="" src={certificateImageURL} alt="Logo" />
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
            {loading && <p className="mt-4 text-bold text-lg">Loading...</p>}
            {error && <p className="mt-4 text-bold text-lg text-red-500">{error}</p>}
            {!loading && !error && participant && (
              <div>
                <p className="mt-4 text-bold text-lg">
                  Participant: {participant.firstname} {participant.surname}, Rank: {participant.rank}
                </p>
                <button
                  className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded cursor-pointer"
                  onClick={handleGenerateCertificate}
                >
                  บันทึกเป็น PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
