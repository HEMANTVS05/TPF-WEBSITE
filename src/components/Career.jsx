import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import PageBanner from './PageBanner';

export default function Career() {
  return (
    <div className="bg-white min-h-screen overflow-hidden relative pb-24">
      <PageBanner 
        title="Join Our Cause" 
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(35,141,187,0.05)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
      
      <div className="container relative z-10 pt-16">
        <SectionTitle title="Careers" subtitle="Work With Us" align="left" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Shape the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#238dbb] to-[#0f4c75]">Coastal Empowerment</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We are constantly looking for passionate individuals who are dedicated to making a difference in the marine and coastal sectors. Join our interdisciplinary team and contribute to building a sustainable blue legacy.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="bg-gray-50 border-l-4 border-[#238dbb] p-8 rounded-r-3xl shadow-sm border-t border-r border-b border-gray-100 relative group cursor-pointer hover:shadow-md transition-all">
                <Link to="/career/internships" className="absolute inset-0 z-20"></Link>
                <h3 className="text-2xl font-bold text-[#0f4c75] mb-3 group-hover:text-[#238dbb] transition-colors">Internship Program</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gain hands-on experience in maritime research, legal advocacy, and community outreach.
                </p>
                <button className="text-[#238dbb] font-bold group-hover:translate-x-2 transition-transform">Read More &rarr;</button>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#0f4c75] p-8 rounded-r-3xl shadow-sm border-t border-r border-b border-gray-100 relative group cursor-pointer hover:shadow-md transition-all">
                <Link to="/career/volunteers" className="absolute inset-0 z-20"></Link>
                <h3 className="text-2xl font-bold text-[#0f4c75] mb-3 group-hover:text-[#238dbb] transition-colors">Volunteer Opportunities</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our grassroots initiatives to make a tangible difference in coastal communities.
                </p>
                <button className="text-[#238dbb] font-bold group-hover:translate-x-2 transition-transform">Read More &rarr;</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            <div className="w-full aspect-square md:aspect-auto md:h-[500px] rounded-[3rem] bg-gray-100 relative overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Careers at C.A.R.c.E" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c75]/80 via-transparent to-transparent opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
