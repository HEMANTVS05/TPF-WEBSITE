import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Newspaper, BookText, BarChart, FolderOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';
import PageBanner from './PageBanner';

const libraryItems = [
  { title: "Publication", icon: BookOpen, color: "from-blue-400 to-blue-600", link: "/library/publication" },
  { title: "Articles", icon: Newspaper, color: "from-cyan-400 to-cyan-600", link: "/library/articles" },
  { title: "Monthly Magazines", icon: BookText, color: "from-sky-400 to-sky-600", link: "/library/magazines" },
  { title: "Research Report", icon: BarChart, color: "from-[#238dbb] to-[#0f4c75]", link: "/library/reports" },
  { title: "Other Reports", icon: FolderOpen, color: "from-indigo-400 to-[#0f4c75]", link: "/library/other-reports" }
];

export default function Library() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden pb-24">
      <PageBanner 
        title="Knowledge Hub" 
        imageSrc="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop" 
      />
      
      <div className="container relative z-10 pt-16">
        <SectionTitle title="Digital Library" subtitle="Resources" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {libraryItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-[2.5rem] p-1 border border-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-500 group relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={item.link} className="absolute inset-0 z-20"></Link>
              <div className="h-full w-full bg-gray-50 rounded-[2.3rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden transition-colors duration-500 group-hover:bg-white z-10">
                
                {/* Background Gradient Blob on Hover */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-0`}></div>
                
                <div className="relative z-10 mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-sm text-[#0f4c75]">
                  <item.icon className="w-16 h-16" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-gray-900 group-hover:text-[#0f4c75] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 font-bold text-[#238dbb]">
                  Access &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Banner */}
        <motion.div 
          className="mt-12 bg-[#0f4c75] rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Want to Contribute?</h3>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">We welcome insights, articles, and research from scholars, researchers, and maritime professionals to be featured in our library.</p>
            <Link to="/contact" className="inline-block bg-white text-[#0f4c75] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">Submit Your Work</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
