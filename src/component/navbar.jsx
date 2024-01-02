import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-black flex p-3 justify-between items-center flex-wrap font-noto-sans-thai">
      <div className="flex justify-center sm:justify-start lg:sm:justify-start xl:sm:justify-start">
        <a href="/">
          <img
            className="h-12 px-14 sm:h-24 lg:h-24 md:h-24 xl:h-24"
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/logo.png?updatedAt=1703000678958"
            alt="Logo"
          />
        </a>
      </div>
      <div className="flex items-center justify-end mx-3  sm:text-2xl lg:text-2xl">
        <a href="https://linktr.ee/epd_dmsu" className="text-white mx-5">
          สมัครเลย
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe99AgZoeUsaege0ebSLLqXec2kaQUBbigjXsaSWVYbFOdDhA/viewform" className="text-white mx-5">
          สั่งซื้อเสื้อ
        </a>
        <a href="https://www.facebook.com/profile.php?id=61554407915847" className="text-white mx-6">
          ติดต่อเรา
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
