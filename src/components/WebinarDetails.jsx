import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, User, ArrowLeft, Info, Image as ImageIcon } from 'lucide-react';
import poster1 from '../assets/webinar_poster_1.jpg';
import poster2 from '../assets/webinar_poster_2.jpg';
import poster3 from '../assets/webinar_poster_3.jpeg';

const webinarData = {
  '1': {
    title: 'Impact of Fishermen Conflict on National Security of India',
    subtitle: 'An insightful webinar presented by Council of Aquademic Research and Coastal Empowerment',
    stats: [
      { label: 'Mode', value: 'Online' },
      { label: 'Participants', value: '50+' }
    ],
    about: 'The Council of Aquademic Research and Coastal Empowerment proudly presents an insightful webinar on the theme "Impact of Fishermen Conflict on National Security of India," featuring the distinguished scholar and expert Dr. Xavier Louis as the keynote speaker. \n\nThis timely and significant session will delve into the multifaceted challenges faced by the Indian fishing community along its vast coastline, examining how disputes over maritime boundaries, resource competition, and cross-border fishing tensions intersect with broader national security concerns. \n\nDr. Xavier Louis will offer a comprehensive analysis of the geopolitical, socio-economic, and strategic dimensions of fishermen conflicts, drawing attention to the vulnerabilities they expose in India\'s coastal defense framework and the humanitarian crises they trigger among coastal communities. The webinar aims to foster informed dialogue among academics, policymakers, researchers, and civil society stakeholders toward building sustainable and peaceful coastal governance mechanisms that safeguard both the livelihoods of fisherfolk and the sovereign integrity of the nation.',
    speakers: 'Dr. Xavier Louis',
    participantsDesc: 'Academics, policymakers, researchers, and civil society stakeholders',
    venue: 'Online Meet Link',
    date: '20th September 2025',
    time: '2:00 PM - 3:00 PM',
    mode: 'Online',
    poster: poster1
  },
  '2': {
    title: 'Coastal Security Threats and Approaches to Neutralize the Threats',
    subtitle: 'A distinguished webinar presented by Council of Aquademic Research and Coastal Empowerment',
    stats: [
      { label: 'Mode', value: 'Online' },
      { label: 'Participants', value: '70+' }
    ],
    about: 'The Council of Aquademic Research and Coastal Empowerment proudly presents a distinguished webinar on the critical theme "Coastal Security Threats and Approaches to Neutralize the Threats," featuring the eminent naval veteran and strategist Commodore Vijesh Garg, VSM, Indian Navy as the keynote speaker. \n\nThis prestigious session will provide a comprehensive and authoritative exploration of the evolving security challenges confronting India\'s extensive coastline, spanning over 7,500 kilometers and bordering strategically vital maritime zones. Commodore Vijesh Garg, drawing upon his vast experience and expertise in naval operations and maritime strategy, will examine the spectrum of coastal security threats including illegal infiltration, smuggling, piracy, terrorist activities, and the growing menace of non-state actors operating through maritime routes. \n\nThe webinar will further illuminate the strategic doctrines, technological advancements, intelligence frameworks, and inter-agency coordination mechanisms employed by India\'s security apparatus to effectively detect, deter, and neutralize these threats. This enlightening session is designed to engage academics, defense researchers, policymakers, coastal administrators, and security professionals in a meaningful discourse aimed at strengthening India\'s coastal defense architecture and ensuring the safety and sovereignty of its maritime boundaries.',
    speakers: 'Commodore Vijesh Garg, VSM, Indian Navy',
    participantsDesc: 'Academics, defense researchers, policymakers, coastal administrators, and security professionals',
    venue: 'Online Meet Link',
    date: '26 October 2025',
    time: '10:30 AM - 11:30 AM',
    mode: 'Online',
    poster: poster2
  },
  '3': {
    title: 'The Silent Frontier: Exploring the Sea as a Medium, Undersea Warfare, and Modern Naval Technology',
    subtitle: 'A distinguished webinar presented by Council of Aquademic Research and coastal Empowerment',
    stats: [
      { label: 'Mode', value: 'Online - WebX' },
      { label: 'Participants', value: '40' }
    ],
    about: 'The webinar on "The Silent Frontier: Exploring the Sea as a Medium, Undersea Warfare, and Modern Naval Technology" featured Commodore Anil Jose Joseph, who provided an insightful overview of naval warfare, maritime strategy, and maritime security challenges. Introduced by Lokeshwari Jothy Natarajan, Commodore Joseph drew upon his extensive naval experience to explain the evolving nature of maritime operations and strategic competition at sea.\n\nA major focus of the session was the complex world of undersea warfare, where Commodore Joseph discussed sonar technology, underwater acoustics, submarine operations, and the strategic contest between submarines and surface vessels. He also examined emerging technologies such as autonomous underwater vehicles and advanced detection systems, highlighting both their operational advantages and technological limitations in modern naval environments.\n\nThe webinar further explored the strategic significance of maritime choke points, deep-sea communication cables, special maritime operations, and India’s growing role in regional maritime cooperation. Commodore Joseph emphasized the importance of international legal frameworks, particularly United Nations Convention on the Law of the Sea, in maintaining maritime order and security. Through an engaging discussion and interactive Q&A session, participants gained a deeper understanding of India\'s maritime strategy, naval diplomacy, and the emerging challenges shaping the future of maritime security.',
    speakers: 'COMMODORE ANIL JOSE JOSEPH NERIAMPARAMPIL, VSM , INDIAN NAVY(RETD)',
    participantsDesc: 'Academics, defense researchers, and Students',
    venue: 'Online - WebX',
    date: '19 - 06 - 2026',
    time: '6:30 Pm',
    mode: 'Online',
    poster: poster3
  }
};

export default function WebinarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = webinarData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Webinar not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="container max-w-5xl">
        <button
          onClick={() => navigate('/events/seminars-webinars')}
          className="flex items-center gap-2 text-[#0f4c75] font-semibold mb-8 hover:text-[#238dbb] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Webinars
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-[#0f4c75] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#238dbb] rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                Webinar Details
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-md">
                {data.title}
              </h1>
              <p className="text-xl text-blue-100 font-medium">
                {data.subtitle}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#238dbb]"><Info size={20} /></span>
                About the Webinar
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed text-justify mb-10 whitespace-pre-line">
                {data.about}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="text-[#238dbb]" size={20} />
                    Speakers
                  </h3>
                  <p className="text-gray-600 font-medium">{data.speakers}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="text-[#238dbb]" size={20} />
                    Participants
                  </h3>
                  <p className="text-gray-600 font-medium whitespace-pre-line">{data.participantsDesc}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#238dbb]"><ImageIcon size={20} /></span>
                  Event Poster
                </h3>
                <img src={data.poster} alt={data.title} className="w-full h-auto rounded-3xl shadow-xl border border-gray-100 object-cover" />
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-blue-100 shadow-sm sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Event Details
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 text-[#238dbb]">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Date</p>
                      <p className="font-semibold text-gray-900">{data.date}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 text-[#238dbb]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Time</p>
                      <p className="font-semibold text-gray-900">{data.time}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 text-[#238dbb]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Venue ({data.mode})</p>
                      <p className="font-semibold text-gray-900 leading-snug whitespace-pre-line">{data.venue}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col gap-3">
                    {data.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                        <span className="text-lg font-extrabold text-[#0f4c75] text-right">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
