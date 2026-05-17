import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageBanner from './PageBanner';
import bannerImage from '../assets/banner_gallery.jpeg';

// Import images using Vite's import.meta.glob
const medicalGlob = import.meta.glob('../assets/medical_*.jpeg', { eager: true, import: 'default' });
const workshopGlob = import.meta.glob('../assets/workshop_*.jpeg', { eager: true, import: 'default' });
const cleanupGlob = import.meta.glob('../assets/cleanup_*.jpeg', { eager: true, import: 'default' });

const extractImages = (globObj) => {
  return Object.keys(globObj)
    .map(key => ({
      url: globObj[key],
      num: parseInt(key.match(/_(\d+)\.jpeg$/)[1], 10)
    }))
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
  }
];

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-900 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-contain md:object-cover bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all transform hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all transform hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 px-4 flex-wrap">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-2 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Image Counter Badge */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

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
