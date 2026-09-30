import React from "react";
import { motion } from "framer-motion";
import PageBanner from "./PageBanner";
import SectionTitle from "./SectionTitle";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";
import s4 from "../assets/s4.jpeg";
import s5 from "../assets/s5.jpeg";
import s6 from "../assets/s6.jpeg";
import s7 from "../assets/s7.jpeg";
{/*import s8 from "../assets/s8.jpeg";
import s9 from "../assets/s9.jpeg"; */}
import s10 from "../assets/s10.jpeg";

const scholars = [
  { name: "Mr. Gaurav Mishra", role: "IIT Delhi", image: s1 },
  { name: "Ms. Shrey Shaurya Singh Bisht", role: "Doctoral Candidate,\nUniversity of Delhi", image: s2 },
  { name: "Ms. Moitrayee Devi Baruah", role: "Doctoral Candidate,\nJawaharlal Nehru University", image: s3 },
  { name: "Mr. Vignesh M", role: "Asst. Prof & Head, Sree Ramu College of Arts & Science", image: s4 },
  { name: "Lt. D. Sakthivel", role: "Asst. Prof, Sree Ramu College of Arts & Science", image: s5 },
  { name: "Ms. Sony J R", role: "Teaching Associate, SRM Institute Katangalathur", image: s6 },
  { name: "Mr. K. Purushothamman", role: "Asst. Prof, Polachi Arts and Science College", image: s7 },
  { name: "Ms. S Abirami", role: "Assistant Professor, Takshashila University", image: null },
  { name: "Ms. Harin Ebinesar", role: "Assistant Professor, Akshaya College", image: null },
  { name: "Mr. Revaan M S", role: "Independent Researcher", image: s10 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AdjunctScholars() {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden pb-28">
      <PageBanner
        title="Adjunct Scholars"
        imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
      />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(35,141,187,0.06)_0%,_transparent_70%)] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(15,76,117,0.04)_0%,_transparent_70%)] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none z-0" />

      <div className="container max-w-6xl mx-auto relative z-10 pt-16 px-4">
        <SectionTitle title="Adjunct Scholars" subtitle="Meet the Scholars" align="center" />

        <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mt-4 mb-14 leading-relaxed">
          Our Adjunct Scholars are distinguished minds contributing to maritime research,
          coastal development, and the future of India&apos;s oceanic frontiers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {scholars.map((scholar, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-lg shadow-blue-900/5 border border-gray-100 hover:shadow-2xl hover:shadow-[#238dbb]/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Photo */}
              <div className="w-56 h-56 mb-6 rounded-2xl overflow-hidden shadow-md border-4 border-white bg-gray-100 ring-2 ring-[#238dbb]/10 group-hover:ring-[#238dbb]/30 transition-all duration-300 shrink-0">
                <img
                  src={
                    scholar.image
                      ? scholar.image
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(scholar.name)}&background=0f4c75&color=fff&size=256&bold=true`
                  }
                  alt={scholar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative rule */}
              <div className="flex items-center gap-2 mb-4">
                <div style={{ height: "1px", width: "28px", background: "linear-gradient(90deg, transparent, #238dbb)" }} />
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#238dbb", opacity: 0.6 }} />
                <div style={{ height: "1px", width: "28px", background: "linear-gradient(90deg, #238dbb, transparent)" }} />
              </div>

              {/* Name */}
              <h3 className="text-xl font-extrabold text-[#0f4c75] mb-2 leading-tight">
                {scholar.name}
              </h3>

              {/* Role badge */}
              <span className="inline-block px-4 py-1.5 bg-[#238dbb]/10 text-[#238dbb] rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 whitespace-pre-line text-center">
                {scholar.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
