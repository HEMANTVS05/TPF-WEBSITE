import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Scale, Shield, Fish, Globe } from 'lucide-react';
import SectionTitle from './SectionTitle';
import PageBanner from './PageBanner';

const researchAreas = [
  { title: "Coastal Community", desc: "Empowering local populations through sustainable practices and socio-economic support systems.", icon: Users, colSpan: "col-span-1 md:col-span-2", bg: "bg-gradient-to-br from-blue-50 to-blue-100", link: "/research/coastal-community" },
  { title: "Maritime Law", desc: "Advocating for robust legal frameworks to protect international waters and coastal boundaries.", icon: Scale, colSpan: "col-span-1", bg: "bg-white", link: "/research/maritime-law" },
  { title: "Non-Traditional Security Threat", desc: "Analyzing and mitigating emerging risks like climate change and piracy.", icon: Shield, colSpan: "col-span-1", bg: "bg-white", link: "/research/security" },
  { title: "Coastal & Maritime Eco-system", desc: "Preserving biodiversity and restoring critical habitats along our shorelines.", icon: Fish, colSpan: "col-span-1 md:col-span-2", bg: "bg-gradient-to-tr from-[#238dbb]/10 to-[#0f4c75]/10", link: "/research/ecosystem" },
  { title: "Sustainable Development Goals", desc: "Aligning all initiatives with UN SDGs to ensure long-term planetary health.", icon: Globe, colSpan: "col-span-1 md:col-span-3", bg: "bg-[#0f4c75] text-white", link: "/research/sdg" }
];

export default function Research() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden pb-24">
      <PageBanner
        title="Our FocusAreas"
        imageSrc="https://images.unsplash.com/photo-1582967635948-283151eb0d22?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container relative z-10 pt-16">
        <SectionTitle title="Our Focus Areas" subtitle="Research" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden cursor-pointer ${area.colSpan} ${area.bg}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={area.link} className="absolute inset-0 z-20"></Link>
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <area.icon className="w-64 h-64" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${area.bg === 'bg-[#0f4c75] text-white' ? 'bg-white/20 text-white' : 'bg-white border border-gray-100 text-[#0f4c75]'}`}>
                  <area.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className={`text-2xl font-bold mb-3 ${area.bg === 'bg-[#0f4c75] text-white' ? 'text-white' : 'text-gray-900'}`}>{area.title}</h4>
                  <p className={`${area.bg === 'bg-[#0f4c75] text-white' ? 'text-blue-100' : 'text-gray-600'} leading-relaxed`}>{area.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
