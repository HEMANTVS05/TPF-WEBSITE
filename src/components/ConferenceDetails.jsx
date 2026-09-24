import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, User, ArrowLeft, Info, Image as ImageIcon } from 'lucide-react';
import Slideshow from './Slideshow';

const confGlob = import.meta.glob('../assets/[0-9]*.jpeg', { eager: true, import: 'default' });

const extractImages = (globObj) => {
  return Object.keys(globObj)
    .map(key => {
      const filename = key.split('/').pop();
      const match = filename.match(/(\d+)/);
      let num = 0;
      if (match) {
        num = parseInt(match[1], 10);
        if (filename.includes('before')) num -= 0.5;
        if (filename.includes('after')) num += 0.5;
      }
      return {
        url: globObj[key],
        num: num
      };
    })
    .sort((a, b) => a.num - b.num)
    .map(item => item.url);
};
const confImages = extractImages(confGlob);

const conferenceData = {
  '1': {
    title: "India's Coastal and Maritime Communities: Building Resilience Against Non-Traditional Security Threats",
    subtitle: 'A two-day intercollegiate student seminar jointly organized by C.A.R.c.E and Government Arts and Science College (Autonomous), Coimbatore.',
    stats: [
      { label: 'Mode', value: 'Offline' },
      { label: 'Participants', value: '48 (24 Teams)' }
    ],
    about: 'Council of Aquademic Research and Coastal Empowerment and Government Arts and Science College (Autonomous), Coimbatore jointly organized a two-day intercollegiate student seminar on the theme "India’s Coastal and Maritime Communities: Building Resilience Against Non-Traditional Security Threats" on 2nd and 3rd of September 2026 at Government arts and science college, Coimbatore. The seminar aimed to create awareness among students about the emerging challenges affecting India’s coastal belt and maritime domain, including social, environmental, economic, and security-related threats. India’s maritime security framework increasingly recognizes non-traditional threats such as drug trafficking, human trafficking, piracy, and IUU fishing as major concerns for coastal security and regional stability.\n\nThe seminar featured student presentations on six sub-themes: the role of women in fishing families, marine pollution and ocean conservation, drug trafficking in the Indian Ocean, human trafficking through maritime routes, illegal, unreported and unregulated (IUU) fishing as a non-traditional security threat, and India’s maritime security strategy against non-traditional threats. These themes reflected the growing importance of linking coastal community resilience with maritime governance, environmental protection, and security cooperation.\n\nAround 24 teams with 48 participants from various colleges in Tamilnadu took part in the event. The presentations were evaluated by judges from CARcE, who assessed the papers on clarity, originality, relevance, and analytical depth. A quiz competition was also conducted as part of the seminar, adding an engaging and interactive dimension to the programme. Such academic initiatives help students connect classroom learning with real-world maritime security issues and transnational threats in the Indian Ocean Region.\n\nAt the end of the seminar, the best four papers for three positions were selected and were appreciated for their strong content and presentation quality namely Shriya nammi and Chindana from Akshaya College Pollachi, Larashree and Madhumitha from Government Arts and Science College Coimbatore, Eknath and Rishi from SRM Institute of Science and Technology, Yadeayash and Dilip Sharma from SRM Institute of Science and Technology. The seminar successfully encouraged academic discussion, research interest, and awareness among students on the resilience of India’s coastal and maritime communities against evolving non-traditional security threats. It also reinforced the need for interdisciplinary approaches to maritime security, environmental stewardship, and community preparedness.',
    speakers: 'Student Presentations on Six Sub-Themes',
    participantsDesc: 'Students from various colleges in Tamilnadu (24 teams, 48 participants)',
    venue: 'Government Arts and Science College, Coimbatore',
    date: '2nd & 3rd September 2026',
    time: 'Full Day Event',
    mode: 'Offline',
    poster: '/seminar_sept_poster.jpeg',
    hasGallery: true,
    galleryTitle: "Glimpses from the Seminar",
    galleryDescription: "Explore the moments captured during our two-day intercollegiate student seminar, featuring student presentations and interactive sessions."
  }
};

export default function ConferenceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = conferenceData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Conference not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="container max-w-5xl">
        <button
          onClick={() => navigate('/events/conference')}
          className="flex items-center gap-2 text-[#0f4c75] font-semibold mb-8 hover:text-[#238dbb] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Conferences
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
                Conference Details
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
                About the Conference
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed text-justify mb-10 whitespace-pre-line">
                {data.about}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="text-[#238dbb]" size={20} />
                    Highlights
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

          {/* Conference Gallery Section */}
          {data.hasGallery && confImages.length > 0 && (
            <div className="mt-16 mb-8 border-t border-gray-200 pt-12 px-6 md:px-10">
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 bg-[#238dbb]/10 text-[#0f4c75] rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
                  Gallery
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{data.galleryTitle || "Event Gallery"}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.galleryDescription}</p>
              </div>
              <div className="w-full">
                <Slideshow images={confImages} />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
