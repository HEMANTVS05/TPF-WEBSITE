import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, User, ArrowLeft, Info, Image as ImageIcon } from 'lucide-react';
import poster1 from '../assets/poster_1.jpeg';
import poster2 from '../assets/workshop_poster_2.jpg';
import poster3 from '../assets/workshop_poster_3.png';
import poster4 from '../assets/workshop_poster_4.jpeg';

const workshopData = {
  '1': {
    title: 'Workshop on Newswriting and Designing',
    subtitle: 'A specialized capacity-building workshop for defence scholars',
    stats: [
      { label: 'Duration', value: '1 Day Workshop' },
      { label: 'Participants', value: '40+' }
    ],
    about: 'This workshop, organised by C.A.R.c.E, brings together final-year students from the Department of Defence and Strategic Studies, University of Madras, to develop practical skills in newswriting and media designing — an increasingly critical area at the intersection of journalism and policy.',
    speakers: 'Team C.A.R.c.E',
    participantsDesc: 'Final Year Students\nDept. of Defence & Strategic Studies\nUniversity of Madras.',
    venue: 'Department of Defence and Strategic Studies\nUniversity of Madras – Chennai, Tamil Nadu',
    date: 'August 11, 2025',
    time: '10:00 AM onwards',
    mode: 'Offline',
    poster: poster1
  },
  '2': {
    title: 'Newswriting and Designing in the Domain of Maritime Security',
    subtitle: 'Presents a Workshop by Team C.A.R.c.E',
    stats: [
      { label: 'Mode', value: 'Online' },
      { label: 'Participants', value: '70+' }
    ],
    about: 'This workshop, organised by C.A.R.c.E, brings together students of Defence and Strategic Studies to explore the intersection of journalism, visual communication, and maritime security. Participants will gain hands-on insights into crafting impactful news content and designing effective media in one of the most critical security domains of our time.',
    speakers: 'Team C.A.R.c.E',
    participantsDesc: 'Students: Second and Final year',
    venue: 'Dept. of Defence & Strategic Studies, Voorhees College, Vellore',
    date: '13 March 2026',
    time: '2:00 PM',
    mode: 'Online',
    poster: poster2
  },
  '3': {
    title: 'Hands-On Training in Basic Research and Design',
    subtitle: 'One Day Workshop Organized by Team C.A.R.c.E',
    stats: [
      { label: 'Mode', value: 'Offline' },
      { label: 'Participants', value: '50+' }
    ],
    about: 'The Council of Aquademic Research and Coastal Empowerment (C.A.R.c.E) presents an engaging and skill-driven One Day Workshop on Hands-On Training in Basic Research and Design, crafted to equip participants with foundational competencies in academic research methodology and design thinking.\n\nThis intensive workshop offers a practical, activity-based learning experience where participants will be guided through the core stages of research — from formulating a research problem and reviewing literature to designing a study framework and presenting findings effectively.\n\nTeam C.A.R.c.E, comprising experienced researchers, educators, and design practitioners, will facilitate interactive sessions, live demonstrations, and group exercises that bridge the gap between theoretical knowledge and real-world application. The workshop is ideally suited for students, early-career researchers, and professionals seeking to strengthen their research and design skills in a collaborative and hands-on environment. Participants will leave with practical tools, structured templates, and the confidence to independently initiate and execute basic research projects.',
    speakers: 'Mr. I. Marshall Anto, Ms. Lokeshwari Jothi Natarajan', // From the poster text
    participantsDesc: 'Students, early-career researchers, and professionals',
    venue: 'Smart Room, Maruthupandiyar College of Arts and Science (Thanjavur).',
    date: '16.02.2026',
    time: '10:00 AM',
    mode: 'Offline',
    poster: poster3
  },
  '4': {
    title: 'Newsletter & Snippet Content Workshop',
    subtitle: 'Snippet Writing and Media Designing Workshop',
    stats: [
      { label: 'Mode', value: 'Offline' },
      { label: 'Participants', value: '50+' }
    ],
    about: 'Our team conducted a Snippet Writing and Media Designing Workshop for the I and II Year Master’s students of the Department of Defence and Strategic Studies, University of Madras. The workshop brought together around 50 enthusiastic participants and focused on developing students’ skills in communicating and presenting issues related to maritime affairs, maritime security, ocean governance, and contemporary developments in the maritime domain.\n\nThe workshop was designed to provide students with practical exposure to maritime news article writing, snippet writing, media designing, and effective communication of maritime-related information. Participants were introduced to techniques for identifying significant developments in the maritime domain, analysing relevant information, and presenting complex maritime issues in a concise, accessible, and engaging manner.\n\nOur team members enthusiastically took on the role of trainers and mentors, guiding students through the different stages of content creation. Through interactive sessions and practical exercises, the team demonstrated how maritime events, strategic developments, naval affairs, ocean-related issues, and coastal concerns can be effectively transformed into news articles, short-form snippets, and visually engaging media content.\n\nParticular emphasis was placed on developing the ability to communicate maritime issues to a wider audience. Students explored how to simplify complex subjects without compromising their strategic relevance, while also learning the importance of accuracy, clarity, credible sources, and visual storytelling when producing maritime-related content.\n\nThe workshop also highlighted the growing significance of maritime awareness and maritime communication in the contemporary strategic environment. With the increasing importance of the Indian Ocean Region, maritime security, blue economy, ocean governance, and coastal communities, the ability to effectively communicate maritime developments has become an important skill for students and young researchers in Defence and Strategic Studies.\n\nThe active participation and enthusiasm of nearly 50 students made the workshop an engaging and productive learning experience. The initiative provided students with an opportunity to strengthen their research, writing, analytical, and media-designing skills, while encouraging greater interest in contemporary maritime affairs.\n\nOur team is proud to have contributed to this academic and skill-development initiative at the University of Madras and remains committed to creating more opportunities that promote maritime awareness, research, and capacity building among young scholars and students.',
    speakers: 'Team C.A.R.c.E',
    participantsDesc: 'I and II Year Master’s students\nDept. of Defence & Strategic Studies\nUniversity of Madras.',
    venue: 'Department of Defence and Strategic Studies\nUniversity of Madras',
    date: '11 August 2026',
    time: '10:00 AM - 12:30 PM',
    mode: 'Offline',
    poster: poster4
  }
};

export default function WorkshopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = workshopData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Workshop not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="container max-w-5xl">
        <button
          onClick={() => navigate('/events/workshops')}
          className="flex items-center gap-2 text-[#0f4c75] font-semibold mb-8 hover:text-[#238dbb] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Workshops
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
                Workshop Details
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
                About the Workshop
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
