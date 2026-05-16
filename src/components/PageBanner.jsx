import React from 'react';
import { motion } from 'framer-motion';

export default function PageBanner({ title, subtitle, imageSrc }) {
  return (
    <div 
      className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] overflow-hidden shadow-lg bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-[#0f4c75]/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-[#0f4c75]/50 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 flex flex-col items-center justify-end text-center z-10 h-full">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold !text-white mb-6 tracking-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="h-1.5 bg-gradient-to-r from-[#238dbb] to-white rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
}
