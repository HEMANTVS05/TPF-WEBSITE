import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Landmark, MonitorPlay, FileText, Handshake } from 'lucide-react';
import SectionTitle from './SectionTitle';
import PageBanner from './PageBanner';

const eventsList = [
  { title: "Calendar", desc: "Annual academic, policy, and community engagement initiatives.", icon: Calendar, colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-blue-50 to-white", textCol: "text-[#0f4c75]", link: "/events/calendar" },
  { title: "Conference", desc: "Premier knowledge-sharing and networking platforms.", icon: Landmark, colSpan: "md:col-span-1", bg: "bg-white", textCol: "text-gray-900", link: "/events/conference" },
  { title: "Seminar and Webinar", desc: "Dynamic platforms for intellectual exchange and learning.", icon: MonitorPlay, colSpan: "md:col-span-1", bg: "bg-white", textCol: "text-gray-900", link: "/events/seminars-webinars" },
  { title: "Workshops", desc: "Hands-on learning bridging academic and real-world application.", icon: FileText, colSpan: "md:col-span-1", bg: "bg-white", textCol: "text-gray-900", link: "/events/workshops" },
  { title: "Community Outreach", desc: "Grassroots initiatives like beach clean-ups and medical camps.", icon: Handshake, colSpan: "md:col-span-1", bg: "bg-[#0f4c75]", textCol: "text-white", link: "/events/outreach" }
];

export default function Events() {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden pb-24">
      <PageBanner
        title="Events & Conferences"
        imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(35,141,187,0.06)_0%,_transparent_70%)] rounded-full -translate-x-1/2 pointer-events-none z-0"></div>

      <div className="container relative z-10 pt-16">
        <SectionTitle title="Upcoming Activities" subtitle="Events" />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsList.map((event, index) => (
            <motion.div
              key={index}
              className={`rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden ${event.colSpan} ${event.bg}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={event.link} className="absolute inset-0 z-20"></Link>
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <event.icon className="w-64 h-64" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${event.bg === 'bg-[#0f4c75]' ? 'bg-white/20 border border-white/20 text-white' : 'bg-blue-50 border border-blue-100 text-[#238dbb]'}`}>
                  <event.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-3 ${event.textCol}`}>{event.title}</h3>
                  <p className={`${event.bg === 'bg-[#0f4c75]' ? 'text-blue-100' : 'text-gray-600'} leading-relaxed text-lg`}>{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
