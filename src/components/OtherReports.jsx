import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import SectionTitle from './SectionTitle';
import PageBanner from './PageBanner';
import internshipPoster from '../assets/internship_poster.jpeg';

const otherReportItems = [
  {
    title: 'Internship Reports',
    description: 'Session-wise reports from C.A.R.c.E internship programs — featuring expert talks on maritime security, water diplomacy, and coastal research.',
    link: '/library/other-reports/internship-reports',
    image: internshipPoster,
    tag: 'Internship',
    color: 'from-[#238dbb] to-[#0f4c75]',
  },
];

export default function OtherReports() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden pb-24">
      <PageBanner
        title="Other Reports"
        imageSrc="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1170&auto=format&fit=crop"
      />

      <div className="container relative z-10 pt-16">
        <SectionTitle title="Other Reports" subtitle="Library" />

        <div className="mt-12 max-w-2xl mx-auto">
          {otherReportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group relative block rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Poster Image */}
                <div className="relative w-full overflow-hidden bg-[#04182e]" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${item.color} text-white rounded-full text-xs font-bold uppercase tracking-wider mb-3`}>
                      {item.tag}
                    </span>
                    <h3 className="text-3xl font-extrabold !text-white drop-shadow-lg mb-2">{item.title}</h3>
                    <p className="!text-white/90 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-gray-50 px-8 py-5 flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center gap-3 text-[#0f4c75]">
                    <FileText size={20} />
                    <span className="font-semibold text-sm">View Session Reports</span>
                  </div>
                  <span className="text-[#238dbb] font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
