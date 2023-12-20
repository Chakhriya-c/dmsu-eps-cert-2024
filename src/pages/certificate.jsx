import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';


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

  const captureCertificate = async () => {
    try {
      const certificateContainer = document.getElementById('certificate-container');
  
      if (!certificateContainer) {
        console.error('Certificate container not found');
        return null;
      }
  
      const excludedElement = document.getElementById('console-part');
      if (excludedElement) {
        excludedElement.style.display = 'none';
      }
  
      const canvas = await html2canvas(certificateContainer, {
        scale: 2, 
      });
  
      return canvas.toDataURL('image/png');
    } catch (error) {
      console.error('Error capturing certificate:', error);
      return null;
    }
  };
  
  
  const handleGenerateCertificate = async () => {
    if (participant) {
      const certificateDataURL = await captureCertificate();
  
      if (certificateDataURL) {
        console.log('Certificate data URL:', certificateDataURL);
  
        const imageElement = document.createElement('img');
        imageElement.src = certificateDataURL;
  
        const a = document.createElement('a');
        a.href = certificateDataURL;
        a.download = 'certificate.png';
  
        // Trigger the click event programmatically
        a.click();
  
        // Remove the created link after a short delay (e.g., 500 milliseconds)
        setTimeout(() => {
          document.body.removeChild(a);
        }, 500);
        
        // Reload the page after the download is complete (you may adjust the delay)
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Adjust the delay as needed
      }
    } else {
      console.error('Participant not found');
    }
  };
  
  
  const certificateImageURL = `/certificate_placeholder_${selectedBackground}.png`;

  return (
    <div>
      {!loading && !error && participant && (
        <div className="relative bg-white mt-8 md:mt-20 flex flex-col items-center justify-center">
          <div
  id="certificate-container"
  ref={(ref) => (window.certificateContainer = ref)}
  className={`h-2/5 w-2/5 flex flex-col items-center justify-center md:w-1/2 ${
    window.innerWidth < 640 ? 'w-1/2' : 'w-2/5'
  } relative`} 
>
            <div className="relative">
              <img
                className="w-full"
                src={certificateImageURL}
                alt="Logo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              {participant.firstname && participant.surname && participant.rank && (
                <>
                  <p
                      className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white ${
                        'text-lg sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl'
                      } ${window.innerWidth < 1078 && 'sm:text-sm md:text-sm lg:text-lg xl:text-xl'} p-6`} 
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {`${participant.firstname} ${participant.surname}`}
                    </p>

                  <p
                    className={`absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white ${
                      'text-sm sm:text-lg md:text-xl lg:text-4xl xl:text-4xl'
                    }
                      window.innerWidth < 1078
                        ? 'text-xs'
                        : 'text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl'
                    } p-6`}
                  >
                    {`${participant.rank}`}
                  </p>
                </>
              )}
            </div>
        <div id = "console-part" className="flex flex-col items-center mt-4">
              <p className="text-bold">เลือกพื้นหลังเกียรติบัตร</p>
              <select
                className="mt-2 px-4 py-2 rounded-md border border-gray-400 w-full "
                onChange={handleBackgroundChange}
              >
                <option value="tachi">ROV : Tachi</option>
                <option value="illumia">ROV : Illumia</option>
                <option value="grakk">ROV : Grakk</option>
              </select>
              {loading && <p className="mt-4 text-bold text-lg">Loading...</p>}
              {error && (
                <p className="mt-4 text-bold text-lg text-red-500">{error}</p>
              )}
              <button
                    className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded cursor-pointer"
                    onClick={handleGenerateCertificate}>
    บันทึกเป็น PNG
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
