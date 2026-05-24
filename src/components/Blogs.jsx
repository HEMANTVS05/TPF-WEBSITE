import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film, Headphones, Newspaper, BarChart } from 'lucide-react';
import SectionTitle from './SectionTitle';
import PageBanner from './PageBanner';

const blogItems = [
  { title: "Visual storytelling of coastal ecosystems.", type: "Documentary", icon: Film, span: "md:col-span-2", bg: "bg-gradient-to-br from-[#0f4c75] to-[#1a2f4c]", text: "text-white", tagBg: "bg-white/20 text-white", link: "/blogs/documentary" },
  { title: "Conversations with marine experts.", type: "Podcast", icon: Headphones, span: "md:col-span-1", bg: "bg-white", text: "text-gray-900", tagBg: "bg-blue-50 text-[#238dbb]", link: "/blogs/podcast" },
  { title: "Chronicles of maritime developments.", type: "Newsletter", icon: Newspaper, span: "md:col-span-1", bg: "bg-white", text: "text-gray-900", tagBg: "bg-[#238dbb]/10 text-[#0f4c75]", link: "/blogs/newsletter" },
  { title: "Insights from our latest research data.", type: "Data Collection", icon: BarChart, span: "md:col-span-2", bg: "bg-gradient-to-r from-blue-50 to-white", text: "text-gray-900", tagBg: "bg-blue-50 text-[#238dbb]", link: "/blogs/data-collection" }
];

export default function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden pb-24">
      <PageBanner 
        title="Media & Insights" 
        imageSrc="https://images.unsplash.com/photo-1518062973809-b6cb883b6528?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="container relative z-10 pt-16">
        <SectionTitle title="Latest Stories" subtitle="Blogs" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[300px] ${item.span} ${item.bg}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={item.link} className="absolute inset-0 z-20"></Link>
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                <item.icon className="w-64 h-64" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${item.tagBg} shadow-sm backdrop-blur-md border border-white/20`}>
                    {item.type}
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.text === 'text-white' ? 'bg-white/10 text-white' : 'bg-gray-100 text-[#0f4c75]'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${item.text}`}>{item.title}</h3>
              </div>
              
              <div className={`relative z-10 flex items-center gap-2 font-bold mt-8 ${item.text === 'text-white' ? 'text-blue-200' : 'text-[#238dbb]'}`}>
                <span>Explore Content</span> 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
