import React, { useState, useEffect } from 'react';
import anime from 'animejs';


const LandingPage = () => {
  useEffect(() => {
    const textElement = document.getElementById('typed-text');
    const wordsToType = ['แข่ง E-sport', 'แต่ง Cosplay', 'เต้น Cover Dance', 'มาพบกันที่ EPD Day 2024!'];
    const colors = ['#13fafe', '#feb413', '#11ff00',  '#d573ff'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentWord = wordsToType[wordIndex];
      const currentColor = colors[wordIndex];
      textElement.innerHTML = isDeleting
        ? currentWord.slice(0, charIndex)
        : currentWord.slice(0, charIndex + 1);

      textElement.style.color = currentColor;

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(typeText, 500);
      } else if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % wordsToType.length;
        setTimeout(typeText, 500);
      } else {
        setTimeout(typeText, 100);
      }
    }

    typeText();

  }, []);

  return (
    <div className="bg-black min-h-screen font-noto-sans-thai">
      <div className='sm:p-24 lg:p-52 xl:p-50'>
      <h1 className='xl:mx-9 xl:text-5xl lg:text-4xl sm:text-3xl text-white'> ถ้าคุณเป็นคนที่ชอบ... 👇 </h1>
      </div>
      <div id='animation' className='absolute sm:mx-20 lg:mx-40 xl:mx-60'>
        <h1
          id="typed-text"
          className="xl:text-9xl lg:text-8xl sm:text-7xl relative before:absolute before:inset-0 before:animate-typewriter"
        ></h1>
      </div>

      <div id="information" className='flex flex-col mt-64 mx-60 text-4xl '>
        <p className='text-white py-5'> 📅 วันที่ 10 กุมภาพันธ์ 2567 </p>
        <p className='text-white py-5'> 📍  ชั้น 1 เสริมไทยคอมเพล็กซ์</p>
      </div>
      <div className='flex mx-60 mt-10 text-4xl'>
        <button className='bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-4 px-5'> สมัครเลย 🚀 </button>
      </div>
      <div id="e-sport" className='flex sm:flex-row mx-60 mt-72'>
        <div className='sm:order-1'>
          <p className='text-white text-8xl text-cyan-300 '> ROV Tournament</p>
          <p className='text-white text-4xl py-8 '> การแข่งขัน ROV Tournament สำหรับนักเรียนอายุไม่เกิน 18 ปี ร่วมชิงเงินรางวัลมูลค่ารวม 6500 บาท</p>
          <p className='text-white text-4xl py-8'> รวมทีมของคุณ และเข้าร่วมทัวร์นาเมนต์เพื่อเฟ้นหาผู้ชนะ ! </p>
          <button className='mt-8 bg-cyan-300 text-3xl rounded py-4 px-5 rounded-xl'> <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2R6yvezstfGzVq2zjmLn9XdfgwrxtEhYwo09c6xZFBExJyA/viewform">เข้าร่วมการแข่งขัน </a></button>
        </div>
        <img
          src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/ROV.png?updatedA>t=1703010559020"
          className='sm:order-2 sm:mx-12 lg:mx-12 xl:mx-14 w-3/5'
          alt="Esport - ROV Tournament"
        />
      </div>
    <div id="cosplay" className='flex sm:flex-row mx-60 mt-72'>
        <img
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/png.monster-892.png?updatedAt=1703011810690"
            className='sm:order-1 sm:mx-12 lg:mx-12 xl:mx-14 w-3/5'
            alt="Cosplay"
        />
        <div className='sm:order-2'>
            <p className='text-white text-8xl text-yellow-400 '> Cosplay </p>
            <p className='text-white text-4xl py-8 '> ร่วมแต่งคอสเพลย์เป็นตัวละครที่ชื่นชอบใน EPD Day 2024 พบปะเพื่อนๆ ที่มีความชอบเดียวกันภายในงาน </p>
            <p className='text-white text-4xl'> นอกจากนี้สามารถเข้าร่วมกิจกรรม Cosplay TIKTOK Contest (EPD-DAY) ได้อีกด้วย!</p>
            <button className='mt-8 bg-yellow-400 text-3xl rounded-xl py-4 px-5'> รายละเอียด </button>
        </div>
    </div>
    <div id="coverdance" className='flex sm:flex-row mx-60 mt-72'>
        <div className='sm:order-1'>
          <p className='text-white text-8xl text-green-400 '> Cover Dance</p>
          <p className='text-white text-4xl py-8 '> ร่วมประกวดเต้น Cover Dance สำหรับนักเรียนอายุไม่เกิน 18 ปี ที่มีใจรักในการเต้น รวมทีมและจัด track ของคุณให้พร้อม 
          </p>
          <p className='text-white text-4xl py-8'> ร่วมชิงเงินรางวัลมูลค่ากว่า 6500 บาท ภายในงาน EPD Day 2024 รวบรวมเพื่อนๆ แล้วมาเต้นกันเลย! </p>
          <button className='mt-8 bg-green-500 text-3xl rounded-xl py-4 px-5 '> <a href="https://docs.google.com/forms/d/e/1FAIpQLScSAH7v4e25SrwRBIfPZFgYkIh9s3UG2yp2XYHqpN9EVBNU1Q/viewform"> เข้าร่วมการประกวด </a> </button>
        </div>
        <img
          src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/image-transformed.png?updatedAt=1703015099909"
          className='sm:order-2 sm:mx-12 lg:mx-12 xl:mx-14 w-1/2'
          alt="Coverdance"
        />
      </div>
      <div id="t-shirt" className='flex flex-col items-center mx-60 mt-72'>
        <p className=' text-7xl text-purple-400	'> สั่งซื้อเสื้อ EPD Day 2024 </p>
        <img className='w-3/4' src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/Blue%20Purple%20and%20White%20Modern%20Futuristic%20Certificate%20A4%20Document%20(1).png?updatedAt=1703016658372"></img>
        <p className=' text-4xl text-white py-5'> เสื้อ EPD Day 2024 Limited Edition ราคา 270 บาท </p>
        <p className=' text-4xl text-white py-5'> พิเศษสำหรับผู้ที่เข้าร่วมการแข่งขันทุกรายการจะได้รับราคาพิเศษ 250 บาท</p>
        <p className=' text-4xl text-white py-5'> สามารถจัดส่งได้ทั่วประเทศในราคาเพียง 40 บาทเท่านั้น !</p>
        <button className='mt-8 bg-indigo-600 text-3xl rounded-xl py-5 px-10 text-white'> <a href="https://docs.google.com/forms/d/e/1FAIpQLScSAH7v4e25SrwRBIfPZFgYkIh9s3UG2yp2XYHqpN9EVBNU1Q/viewform"> สั่งซื้อที่นี่ </a> </button>
      </div>
      {/*
      <div id="judge" className='flex flex-col items-center mx-60 mt-72'>
        <p className=' text-7xl text-white '> กรรมการ </p>
        <div className='flex grid'> </div>
      </div>
      <div id="sponsor" className='flex flex-col items-center mx-60 mt-72'>
        <p className=' text-7xl text-white '> สนับสนุนโดย </p>
        <div className="grid grid-cols-3 gap-4 mx-6 my-8">
        </div>
        </div>
        */}
        <div id="footer" className='flex flex-row items-center justify-center mt-72'> 
            <img
            className="h-24 px-5"
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/logo.png?updatedAt=1703000678958"
            alt="Logo"
          />
          <img
            className="h-24 px-5"
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/dmsulogo.png?updatedAt=1703017764715"
            alt="Logo"
          />
            
      </div>
        <div id="footer-text" className='flex flex-col items-center mt-10 mx-60'>
                <p className=' text-xl text-white font-bold py-3'> EPD Day 2024 </p>
                <p className=' text-xl text-white py-3'> Mahasarakham University Demonstration School</p>
                <p className=' text-xl text-white py-3'> These events are organized by students with a non-commercial purpose.</p>
        </div>

      </div>

  );
};

export default LandingPage;
