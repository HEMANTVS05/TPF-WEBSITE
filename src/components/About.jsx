import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import aboutImg from '../assets/IMG_1.jpeg';

const objectives = [
  {
    title: "Research",
    icon: "🔬",
    color: "text-[#0f4c75] bg-[#238dbb]/10",
    cardBg: "bg-gradient-to-br from-blue-50 to-white border border-blue-100",
    textColor: "text-[#0f4c75]",
    pointColor: "text-gray-700",
    bulletColor: "text-[#238dbb]",
    points: [
      "Undertake comprehensive studies in areas encompassed by India’s maritime security, with a particular emphasis on the well-being and development of coastal communities.",
      "Study the heritage and cultural records, survival strategies and local governance structures of diverse coastal areas in India while also exploring their interrelations and processes for conflict resolution.",
      "Conduct studies on the level of awareness about international legal frameworks in the maritime domain among coastal communities and assess their impact on these societies.",
      "Create opportunities for young minds to engage in research within our focus areas, enabling them to gain some insights into India’s maritime sector."
    ]
  },
  {
    title: "Knowledge Center",
    icon: "📚",
    color: "text-white bg-white/10 border border-white/20",
    cardBg: "bg-[#0f4c75]",
    textColor: "!text-white",
    pointColor: "text-blue-100",
    bulletColor: "text-blue-300",
    points: [
      "Conduct and organise lectures, seminars, conferences, and research on matters relating to our focus areas.",
      "Organise outreach activities aimed at transferring knowledge to communities reliant on marine resources.",
      "Create and maintain comprehensive documentation of collected data, ensuring it is organized for publication and accessible to different stakeholders based on their specific needs."
    ]
  },
  {
    title: "Collaborative & Community-Connected",
    icon: "🤝",
    color: "text-white bg-white/10 border border-white/20",
    cardBg: "bg-[#0f4c75]",
    textColor: "!text-white",
    pointColor: "text-blue-100",
    bulletColor: "text-blue-300",
    points: [
      "Organise regular health camps.",
      "Conducting night schools and other educational initiatives to provide learning opportunities for children of coastal communities who cannot afford formal education.",
      "Organise lectures and campaigns to raise awareness of the conservation of marine resources and the existing international and national frameworks that support these efforts."
    ]
  },
  {
    title: "Application",
    icon: "⚙️",
    color: "text-[#0f4c75] bg-[#238dbb]/10",
    cardBg: "bg-gradient-to-br from-blue-50 to-white border border-blue-100",
    textColor: "text-[#0f4c75]",
    pointColor: "text-gray-700",
    bulletColor: "text-[#238dbb]",
    points: [
      "One of the main objectives is to brainstorm on matters of public policy which pertain to coastal areas and their security."
    ]
  }
];

export default function About() {
  return (
    <div id="about-us" className="bg-white min-h-screen relative overflow-hidden pb-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(35,141,187,0.05)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(15,76,117,0.03)_0%,_transparent_70%)] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none z-0"></div>

      <div className="container relative z-10 pt-16 md:pt-24">
        <SectionTitle title="About Us" subtitle="Who We Are" align="center" />

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8 mb-16">
          <motion.div
            className="flex-1 space-y-6 text-justify"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We are a youth-led, pioneering organisation with the synergy of a maritime-focused think tank and a non-governmental organisation (NGO) committed to the integrated development of India’s coastal and maritime sector. Through innovative research, educational programs, and community-driven initiatives, we aim to strengthen maritime safety and champion sustainable progress. As a ‘think-and-do tank’, we not only conduct research and analysis, but also actively implement our findings and ideas into real-world initiatives and projects. We strive to go beyond traditional research by taking action and turning ideas into direct and measurable impact.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              From developing and implementing programs to advocating for policy changes to starting new initiatives based on research, our work involves in-depth studies on security, heritage, and governance, while fostering youth engagement and public awareness. By connecting with local communities and advocating for impactful policies, we aim to create resilient, vibrant, and empowered coastal societies for generations to come. Anchored in science, inspired by policy, and driven by people, C.A.R.c.E. aims to generate high-quality research, support innovative technologies, train future maritime scholars, and empower coastal communities along India’s 11,098.81-kilometer-long coastline.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-[500px] lg:w-[450px] shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0f4c75]/20 border-4 border-white bg-gray-100">
              <img src={aboutImg} alt="About C.A.R.c.E." className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2.5rem] p-10 shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -right-4 -top-4 text-9xl opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">👁️</div>
            <div className="w-16 h-16 bg-[#238dbb]/10 text-[#0f4c75] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-blue-100">👁️</div>
            <h3 className="text-3xl font-bold text-[#0f4c75] mb-4">Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To evolve into a leading research and knowledge hub promoting mentored, youth-driven ventures dedicated to maritime security advancement, with a particular focus on all aspects of India’s coastal security and development.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0f4c75] rounded-[2.5rem] p-10 shadow-xl relative overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -right-4 -bottom-4 text-9xl opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">🎯</div>
            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-white/20">🎯</div>
            <h3 className="text-3xl font-bold !text-white mb-4">Mission</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              To empower coastal communities, we aim to enhance knowledge through innovative research, education, and grassroots volunteerism. We believe in the transformative power of youth-led social impact initiatives that not only uplift local coastal societies but also inspire the next generation of leaders. An emphasis on collaboration will empower youth to lead impactful steps and enterprises, encouraging ownership and responsibility within their communities. By prioritising academic excellence and humanitarian initiatives, we seek to build meaningful connections with coastal societies, create abundant opportunities for young minds, and champion sustainable development.
            </p>
          </motion.div>
        </div>

        {/* Objectives Section */}
        <div className="mb-8">
          <SectionTitle title="Our Objectives" subtitle="Focus" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                className={`rounded-[2.5rem] p-10 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group ${obj.cardBg}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute -right-4 -bottom-4 text-9xl opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">{obj.icon}</div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${obj.color}`}>
                    {obj.icon}
                  </div>
                  <h4 className={`text-2xl md:text-3xl font-bold ${obj.textColor}`}>{obj.title}</h4>
                </div>

                <ul className="space-y-4 relative z-10">
                  {obj.points.map((point, i) => (
                    <li key={i} className={`flex gap-3 leading-relaxed ${obj.pointColor}`}>
                      <span className={`font-bold mt-1 ${obj.bulletColor}`}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
