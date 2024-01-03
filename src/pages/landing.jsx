import React, { useState, useEffect } from 'react';
import anime from 'animejs';


const LandingPage = () => {
  useEffect(() => {
    const textElement = document.getElementById('typed-text');
    const wordsToType = ['แข่ง E-sport', 'แต่ง Cosplay', 'เต้น Cover', 'มาพบกันที่', 'EPD Day 2024!'];
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
    <div className="bg-black min-h-screen font-kanit">
      <div className='sm:p-32 lg:p-8 xl:p-50'>
      <h1 className='text-2xl flex justify-center py-28 lg:py-0 mb-24 xl:mx-9 xl:text-5xl lg:text-4xl sm:text-4xl text-white'> ถ้าคุณเป็นคนที่ชอบ... 👇 </h1>
      </div>
      <div id='animation' className='text-6xl inset-0 flex items-center justify-center absolute sm:mx-32 lg:mx-40 xl:mx-60'>
        <h1
          id="typed-text"
          className="xl:text-9xl lg:text-8xl sm:text-7xl relative before:absolute before:inset-0 before:animate-typewriter"
        ></h1>
      </div>

      <div id="information" className='flex flex-col py-12 items-center  justify-center sm:mx-32 sm:mt-48 sm:text-2xl lg:mt-52 xl:mt-64 lg:mx-40 xl:mx-60 lg:text-2xl xl:text-3xl '>
        <p className='text-white py-5 '> 📅 วันที่ 10 กุมภาพันธ์ 2567 </p>
        <p className='text-white py-5 '> 📍  ชั้น 1 เสริมไทยคอมเพล็กซ์</p>
        <button className='bg-black text-black'>.</button>
        <button href="https://linktr.ee/epd_dmsu" className='text-xl mt-1 sm:text-3xl bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-4 px-5'> <a href='https://linktr.ee/epd_dmsu'> สมัครเลย 🚀 </a></button>
      </div>       
    <div className='mx-12'>
      <div id="rov" style={{
            backgroundImage: window.innerWidth <= 850 ? 'url(https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/rov.png?updatedAt=1703060129218)' : 'none',
            backgroundSize: 'cover', // Adjust as needed
            backgroundRepeat: 'no-repeat', // Adjust as needed
            backgroundPosition: 'center', // Adjust as needed
          }}className='flex lg:mx-32 xl:mx-60 mt-72 sm:mx-20'
>        <div className='sm:order-1'>
          <p className='text-6xl lg:text-8xl sm:text-7xl text-cyan-500 '> ROV Tournament</p>
          <p className='text-white sm:text-4xl lg:text-4xl py-8 text-2xl'> การแข่งขัน ROV Tournament สำหรับนักเรียนอายุไม่เกิน 18 ปี ร่วมชิงเงินรางวัลมูลค่ารวม 6500 บาท</p>
          <p className='text-white sm:text-4xl lg:text-4xl py-8 text-2xl'> รวมทีมของคุณ และเข้าร่วมทัวร์นาเมนต์เพื่อเฟ้นหาผู้ชนะ ! </p>
          <button className='mt-8 bg-cyan-300 text-3xl rounded py-4 px-5 rounded-xl'> <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2R6yvezstfGzVq2zjmLn9XdfgwrxtEhYwo09c6xZFBExJyA/viewform">เข้าร่วมการแข่งขัน </a></button>
        </div>

      </div>
    <div id="cosplay" style={{
                backgroundImage: window.innerWidth <= 850 ? 'url(https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/cosplay.png?updatedAt=1703060235230)' : 'none',
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center', 
            }}
                className='flex lg:mx-32 xl:mx-60 mt-72 sm:mx-20'>         
              <div className=''>
              <p className=' text-6xl  lg:text-8xl sm:text-7xl text-yellow-400'> Cosplay </p>
              <p className='text-white sm:text-4xl lg:text-4xl py-8 text-2xl'> พบปะเพื่อนๆ ที่ชื่นชอบการ cosplay และเข้าร่วมประกวด EPD TikTok Challenge! </p>
              <p className='text-white sm:text-4xl lg:text-4xl py-8 text-2xl'> พบกันได้ภายในงาน EPD Day 2024 เตรียมชุด และพร้อบของคุณให้พร้อม </p>
              <button className='mt-8 bg-yellow-500 text-3xl rounded-xl py-4 px-5 '> <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0ty3JFXBKRF6S9TVFhfWLX8udxcq1gS3A5WaLGqZ29HvMs3ouj6xfAJ8jAyBF9h55l&id=61554407915847"> รายละเอียด </a> </button>
            </div>
            
          </div>

    <div id="coverdance" style={{
                backgroundImage: window.innerWidth <= 850 ? 'url(https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/image.png?updatedAt=1703057916799)' : 'none',
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center', 
            }}
                className='flex lg:mx-32 xl:mx-60 mt-72 sm:mx-20'>          <div className=''>
              <p className='text-6xl lg:text-8xl sm:text-7xl text-green-400 '> Cover Dance</p>
              <p className='text-white sm:text-4xl lg:text-4xl py-8 text-2xl'> ร่วมประกวดเต้น Cover Dance สำหรับนักเรียนอายุไม่เกิน 18 ปี ที่มีใจรักในการเต้น รวมทีมและจัด track ของคุณให้พร้อม </p>
              <p className='text-white sm:text-4xl lg:text-4xl py-8 text-2xl'> ร่วมชิงเงินรางวัลมูลค่ากว่า 6500 บาท ภายในงาน EPD Day 2024 รวบรวมเพื่อนๆ แล้วมาเต้นกันเลย! </p>
              <button className='mt-8 bg-green-500 text-3xl rounded-xl py-4 px-5 '> <a href="https://docs.google.com/forms/d/e/1FAIpQLScSAH7v4e25SrwRBIfPZFgYkIh9s3UG2yp2XYHqpN9EVBNU1Q/viewform"> เข้าร่วมการประกวด </a> </button>
            </div>
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

        </div>
        <div className='flex flex-col lg:mx-32 xl:mx-60 mt-72 sm:mx-20 items-center justify-center'>
        <p className='text-5xl font-bold lg:text-8xl sm:text-7xl text-purple-400 py-12'>  EPD T-shirt </p>

<iframe
    className='mx-12 w-full'
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ZNvnNQJyRhQ1EmHr5WVhPYgFBReUAJJvc7yUjGC8PAd9MTSq8Gg3HmiVJgrMbM6kl%26id%3D61554407915847&show_text=false"
    width="100%"
    height="520"
    style={{ border: 'none', overflow: 'hidden' }}
    allowFullScreen={true}
  ></iframe>        
  </div>
  <div className='flex flex-col items-center justify-center mt-24 text-white'>
      <p> เนื้อหาใหม่ๆ จะมาภายในเร็วๆ นี้ รออัพเดทเลย!</p>
      <p> More content COMING SOON!</p>
      <p> 👾 💃 💄 </p>

    </div>
          <div id="footer" className='flex items-center justify-center mt-72'> 
            <img
            className="h-16 px-5"
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/logo.png?updatedAt=1703000678958"
            alt="Logo"
          />
          <img
            className="h-16 px-5"
            src="https://ik.imagekit.io/j1g9rsjgs/dmsu-eps-2024/dmsulogo.png?updatedAt=1703017764715"
            alt="Logo"
          />
      </div>
        <div id="footer-text" className='flex flex-col justify-center items-center'>
                <p className='text-sm lg:text-l sm:text-l text-white font-bold py-3'> EPD Day 2024 </p>
                <p className='text-sm sm:text-l lg:text-l text-white py-3'> Mahasarakham University Demonstration School</p>
        </div>

      </div>

  );
};

export default LandingPage;
