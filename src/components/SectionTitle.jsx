import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, align = 'center' }) {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} mb-12`}>
      <motion.h4 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[#238dbb] tracking-widest uppercase text-sm font-bold mb-3"
      >
        {subtitle}
      </motion.h4>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f4c75] mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-[#238dbb] to-[#0f4c75] rounded-full"
      />
    </div>
  );
}
