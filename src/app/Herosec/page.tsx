"use client";
import { useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const options = {
      strings: ['', 'FullStack Web Developer,', 'Frontend Developer,', 'Backend Developer,', 'Web Developer.'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    // Initialize Typed.js
    const typed = new Typed('.typing', options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="w-full h-[528px] mt-[65px] bg-gradient-to-r from-blue-800 to-black">

      <div className="h-full w-full mx-auto relative top-9 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pt-4">
        <div className="w-full relative">
          <img className="shadow-2xl shadow-blue-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto" src="man.png" alt="My Image" />
          <img className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-blue-400/30" src="/man.png" alt="My Image" />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">Hello, My name is Ahmed Memon</h1>
          <h3 className="capitalize text-blue-400">i'm <span className="typing text-green-500 dark:text-green-700"></span></h3>
          <p>Experienced full-stack developer with 2+ years of expertise in NextJS, Html, Css, Javascript, Typescript, Tailwind Css. </p>
          <div className="sm:mt-4 mt-2">
            <button className="px-6 py-1 bg-blue-500 text-white rounded-sm">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
