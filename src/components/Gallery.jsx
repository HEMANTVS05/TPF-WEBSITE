import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageBanner from './PageBanner';
import bannerImage from '../assets/banner_gallery.jpeg';
import Slideshow from './Slideshow';

// Import images using Vite's import.meta.glob
const medicalGlob = import.meta.glob('../assets/medical_*.jpeg', { eager: true, import: 'default' });
const workshopGlob = import.meta.glob('../assets/workshop_*.jpeg', { eager: true, import: 'default' });
const cleanupGlob = import.meta.glob('../assets/cleanup_*.jpeg', { eager: true, import: 'default' });
const confGlob = import.meta.glob('../assets/[0-9]*.jpeg', { eager: true, import: 'default' });

const extractImages = (globObj) => {
  return Object.keys(globObj)
    .map(key => {
      const filename = key.split('/').pop();
      const match = filename.match(/(\d+)/);
      let num = 0;
      if (match) {
        num = parseInt(match[1], 10);
        if (filename.includes('before')) num -= 0.5;
        if (filename.includes('after')) num += 0.5;
      }
      return {
        url: globObj[key],
        num: num
      };
    })
    .sort((a, b) => a.num - b.num)
    .map(item => item.url);
};

const galleries = [
  {
    title: "Medical Camp",
    description: "Our medical camps provide essential healthcare access to remote fishing and coastal populations. We offer medical check-ups, hygiene awareness, and health education to ensure the well-being of the communities.",
    images: extractImages(medicalGlob)
  },
  {
    title: "Workshop",
    description: "Hands-on workshops designed to bridge the gap between academic learning and real-world application. We empower students and young researchers with the skills needed for impactful work in the maritime domain.",
    images: extractImages(workshopGlob)
  },
  {
    title: "Coastal Clean Up",
    description: "Mobilising youth volunteers and local communities to preserve coastal ecosystems. These initiatives raise awareness about ocean health, pollution, and sustainable waste management.",
    images: extractImages(cleanupGlob)
  },
  {
    title: "Conferences",
    description: "Our conference series serves as a premier knowledge-sharing platform, bringing together maritime experts, youth leaders, and policymakers. Through multidimensional discussions, we address contemporary challenges and opportunities in India's coastal sectors.",
    images: extractImages(confGlob)
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <PageBanner
        title="Photo Gallery"
        imageSrc={bannerImage}
      />

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(35,141,187,0.06)_0%,_transparent_70%)] rounded-full -translate-x-1/2 pointer-events-none z-0"></div>

      <div className="container max-w-7xl relative z-10 pt-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#238dbb]/10 text-[#0f4c75] rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            About Us / Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Our Impact in Action</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our initiatives and grassroots programs through these visual stories from across India's coastline.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {galleries.map((gallery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_20px_60px_rgba(15,76,117,0.05)] border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-full lg:w-[65%]">
                  <Slideshow images={gallery.images} />
                </div>
                <div className="w-full lg:w-[35%] flex flex-col justify-center">
                  <div className="w-16 h-1.5 bg-gradient-to-r from-[#238dbb] to-[#0f4c75] rounded-full mb-6"></div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{gallery.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {gallery.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
