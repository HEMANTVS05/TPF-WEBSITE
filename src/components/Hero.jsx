import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero bg-gray-50 relative overflow-hidden flex flex-col justify-center min-h-screen md:min-h-[90vh] pt-24" ref={containerRef}>
      {/* Background Graphic Elements */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(35,141,187,0.1)_0%,_transparent_70%)]"
        style={{ y: y1, opacity }}
      />
      <div className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[30vh] z-0 pointer-events-none opacity-90">
        <motion.div className="absolute bottom-0 -left-[20%] w-[140%] h-[60%] bg-repeat-x bg-bottom bg-[length:50%_100%] wave-light-1" style={{ x: useTransform(scrollYProgress, [0, 1], [0, 100]) }} />
        <motion.div className="absolute bottom-0 -left-[20%] w-[140%] h-[40%] bg-repeat-x bg-bottom bg-[length:50%_100%] wave-light-2" style={{ x: useTransform(scrollYProgress, [0, 1], [0, -150]) }} />
        <motion.div className="absolute bottom-0 -left-[20%] w-[140%] h-[25%] bg-repeat-x bg-bottom bg-[length:50%_100%] wave-light-3" style={{ x: useTransform(scrollYProgress, [0, 1], [0, 200]) }} />
      </div>

      <div className="container relative z-20 flex flex-col items-center text-center gap-8 md:gap-10 pb-24 md:pb-32 pt-8 md:pt-16">
        <motion.div 
          className="w-40 h-40 md:w-48 md:h-48 flex justify-center items-center relative"
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: y2, scale }}
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center bg-white rounded-full shadow-[0_20px_60px_rgba(15,76,117,0.1)] border border-gray-100 overflow-hidden p-6 md:p-8 ring-[10px] ring-white/60">
            <img src={logoImg} alt="C.A.R.C.E Logo" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>

        <motion.div 
          className="max-w-4xl flex flex-col items-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ opacity }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.3]">
            <span className="reveal-text"><span>COUNCIL OF AQUADEMIC</span></span><br/>
            <span className="reveal-text"><span>RESEARCH AND</span></span><br/>
            <span className="reveal-text"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#238dbb] to-[#0f4c75]">COASTAL EMPOWERMENT</span></span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 md:mt-6"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-white border border-blue-100 text-[#0f4c75] font-extrabold text-xs md:text-sm tracking-[0.2em] shadow-sm backdrop-blur-sm">
              # Building Blue Legacy #
            </span>
          </motion.div>

          <motion.div 
            className="mt-6 md:mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#about-us" onClick={handleScrollToAbout} className="btn-primary py-3 px-6 md:py-4 md:px-8 shadow-xl">Discover Our Mission</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
