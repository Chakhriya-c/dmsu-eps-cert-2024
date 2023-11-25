// pages/login.jsx
import React from 'react';

const LoginPage = () => {
  return (
    <div className="relative h-screen w-screen bg-black flex flex-col items-center justify-center">
      <img
        className="w-20 h-20 absolute top-3 right-4"
        src="/dmsulogo_2.png"
        alt="Logo"
      />
      <img className="h-1/3" 
      src="/logo.jpg"></img>
      <p className="text-white font-bold text-lg mb-1">Certificate Redeem for EPS Day 2024</p>
      <p className="text-white mb-4">กรอกเบอร์โทรศัพท์ที่ลงทะเบียนเพื่อรับเกียรติบัตร</p>
      <form className="text-center">
        <div>
        <input
            type="text"
            id="phnum"
            className = "border rounded-md mb-4">
        </input>
        </div>
        <input type = "submit" value = "ยืนยัน" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer mx-auto"></input>
      </form>
    </div>
  );
}

export default LoginPage;
