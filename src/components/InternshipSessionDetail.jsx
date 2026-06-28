import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, ArrowLeft, Info, PlayCircle } from 'lucide-react';
import { internshipSessionsData } from './InternshipReports';

export default function InternshipSessionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = internshipSessionsData.find((s) => s.id === id);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Session not found</h2>
          <button
            onClick={() => navigate('/library/other-reports/internship-reports')}
            className="flex items-center gap-2 mx-auto text-[#0f4c75] font-semibold hover:text-[#238dbb] transition-colors"
          >
            <ArrowLeft size={18} /> Back to Internship Reports
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="container max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/library/other-reports/internship-reports')}
          className="flex items-center gap-2 text-[#0f4c75] font-semibold mb-8 hover:text-[#238dbb] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Internship Sessions
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Header Banner */}
          <div className="bg-[#0f4c75] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#238dbb]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#238dbb] rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                Internship Session {data.sessionNumber}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-white drop-shadow-md">
                {data.title}
              </h1>
              <p className="text-xl text-blue-100 font-medium">{data.speaker}</p>
              <p className="text-blue-200/80 text-sm mt-1">{data.speakerDetails}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-12">
            {/* Left - Overview + YouTube */}
            <div className="w-full lg:w-2/3">
              {/* Overview */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#238dbb]">
                  <Info size={18} />
                </span>
                Session Overview
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed text-justify mb-10 whitespace-pre-line">
                {data.overview}
              </div>

              {/* Speaker Box */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <User className="text-[#238dbb]" size={20} />
                  About the Speaker
                </h3>
                <p className="text-gray-800 font-semibold text-base">{data.speaker}</p>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{data.speakerDetails}</p>
              </div>

              {/* YouTube Video */}
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <PlayCircle size={18} />
                  </span>
                  Session Recording
                </h3>
                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${data.youtubeId}?rel=0`}
                    title={data.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Right - Event Details Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-blue-100 shadow-sm sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Session Details
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 text-[#238dbb]">
                      <Calendar size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Date</p>
                      <p className="font-semibold text-gray-900">{data.date}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 text-[#238dbb]">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Mode</p>
                      <p className="font-semibold text-gray-900">{data.time}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 text-[#238dbb]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Venue</p>
                      <p className="font-semibold text-gray-900 leading-snug">{data.venue}</p>
                    </div>
                  </li>
                </ul>

                {/* Session Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-[#0f4c75] to-[#238dbb] rounded-2xl p-5 text-center text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Program</p>
                    <p className="text-lg font-extrabold">C.A.R.c.E. Internship</p>
                    <p className="text-blue-200 text-xs mt-1">{data.monthLabel}</p>
                  </div>
                </div>

                {/* YouTube Link */}
                <a
                  href={`https://youtu.be/${data.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm transition-colors shadow-md"
                >
                  <PlayCircle size={18} />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
