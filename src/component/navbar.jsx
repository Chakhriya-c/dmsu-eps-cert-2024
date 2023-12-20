import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-black flex p-3 justify-between items-center flex-wrap font-noto-sans-thai">
      <div className="flex items-center justify-start">
        <Link to="/" className="">
          <img
            className="h-24 px-14"
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/logo.png?updatedAt=1703000678958"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-end mx-3  sm:text-xl lg:text-3xl">
        <div className="relative group">
          <button
            onClick={handleDropdownToggle}
            className="text-white cursor-pointer dropdown lg:dropdown-end max-md:dropdown-bottom mx-5"
          >
            สมัครเข้าร่วม ᐁ
          </button>
          {dropdownOpen && (
            <div className="absolute dropdown-content z-[256] menu p-2 mt-5 shadow text-white bg-indigo-800 rounded-box w-52">              
              <Link to="https://forms.gle/LmeEczTZeezFSL587" className="block px-4 py-3">
                E-Sport
              </Link>
              <Link to="https://forms.gle/PTikzvR3bgYGo24Z9" className="block px-4 py-3">
                Cover Dance
              </Link>
              <Link to="/certificate" className="block px-4 py-3">
                Cosplay
              </Link>
            </div>
          )}
        </div>
        <Link to="/certificate" className="text-white mx-5">
          สั่งซื้อเสื้อ
        </Link>
        <Link to="/certificate" className="text-white mx-6">
          กรรมการ
        </Link>
        <Link to="/certificate" className="text-white mx-6">
          เกียรติบัตร
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=61554407915847"
          className="text-white mx-6"
        >
          ติดต่อเรา
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
