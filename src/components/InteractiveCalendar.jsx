import React, { useState, useEffect } from 'react';
import { Search, Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const EVENTS = [
  { id: 1, date: '2025-04-28', title: 'Coastal Cleanup', time: '07:00 AM - 09:00 AM', venue: 'Besant Nagar' },
  { id: 2, date: '2025-05-15', title: 'Coastal Cleanup', time: '07:00 AM - 09:00 AM', venue: 'AshtaLakshmi Temple' },
  { id: 3, date: '2025-08-11', title: 'News Writing and Designing', time: '10:00 AM', venue: 'University of Madras' },
  { id: 4, date: '2025-08-17', title: 'Medical Camp - Netukuppam', time: '09:00 AM - 04:00 PM', venue: 'Netukuppam' },
  { id: 5, date: '2025-09-20', title: 'International Coastal Cleanup Day', time: '07:00 AM - 09:00 AM', venue: 'Patinapakkam' },
  { id: 6, date: '2025-09-20', title: 'Impact of Fishermen Conflict on National Security of India', time: '02:00 PM', venue: 'Online G - Meet' },
  { id: 7, date: '2025-10-26', title: 'Coastal Security Threats and Approaches to Neutralize the Threats', time: '10:30 AM', venue: 'Online G - Meet' },
  { id: 8, date: '2026-02-16', title: 'Hands on Training and Basic Research and Design', time: '10:00 AM', venue: 'Maruthupandiyar College Of Arts and Science' },
  { id: 9, date: '2026-03-13', title: 'Newsletter and Designing in the Maritime Domain', time: '02:00 PM', venue: 'Voorhees college, Vellore' },
  {
    id: 10,
    date: '2026-06-19',
    title: 'Webinar - "The Silent Frontier: Exploring the Sea as a Medium, Undersea Warfare, and Modern Naval Technology"',
    time: '06:30 PM - 07:30 PM',
    venue: 'Online - WEB X',
    poster: '/webinar_june19_poster.jpeg',
    meetingDetails: {
      link: 'https://councilofaquademicresearchandcoastalempowerment-973.my.webex.com/councilofaquademicresearchandcoastalempowerment-973.my/j.php?MTID=m0a6fb929c4e3c291c672ecc4ce149197',
      number: '2641 413 6668',
      password: 'abRtrmkP262'
    }
  },
];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const VALID_YEARS = [2025, 2026, 2027, 2028, 2029, 2030];

export default function InteractiveCalendar() {
  const [searchYear, setSearchYear] = useState(new Date().getFullYear());
  const [activeYearEvents, setActiveYearEvents] = useState([]);

  const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear());
  const [displayedMonth, setDisplayedMonth] = useState(new Date().getMonth());
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => setActiveTooltip(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSearch = (year) => {
    if (VALID_YEARS.includes(year)) {
      setSearchYear(year);
      const eventsInYear = EVENTS.filter(e => e.date.startsWith(year.toString()));
      setActiveYearEvents(eventsInYear);
      setDisplayedYear(year);
    }
  };

  useEffect(() => {
    // Keep displayed year within bounds on mount
    let initialYear = new Date().getFullYear();
    if (initialYear < 2025) initialYear = 2025;
    if (initialYear > 2030) initialYear = 2030;
    setDisplayedYear(initialYear);
    setSearchYear(initialYear);
    handleSearch(initialYear);
  }, []);

  const jumpToEvent = (dateString) => {
    const [year, month, _] = dateString.split('-');
    setDisplayedYear(parseInt(year));
    setDisplayedMonth(parseInt(month) - 1);
  };

  const prevMonth = () => {
    if (displayedMonth === 0) {
      if (displayedYear > 2025) {
        setDisplayedYear(displayedYear - 1);
        setDisplayedMonth(11);
      }
    } else {
      setDisplayedMonth(displayedMonth - 1);
    }
  };

  const nextMonth = () => {
    if (displayedMonth === 11) {
      if (displayedYear < 2030) {
        setDisplayedYear(displayedYear + 1);
        setDisplayedMonth(0);
      }
    } else {
      setDisplayedMonth(displayedMonth + 1);
    }
  };

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(displayedMonth, displayedYear);
  const firstDay = getFirstDayOfMonth(displayedMonth, displayedYear);
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden mb-16 font-sans">

      {/* Search Header */}
      <div className="bg-gray-50 p-6 md:p-8 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0f4c75]">
              <Search size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Event Records</h2>
              <p className="text-gray-500 text-sm font-medium">Search events by year</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
            <span className="text-gray-500 font-bold">Select Year:</span>
            <select
              value={searchYear}
              onChange={(e) => handleSearch(parseInt(e.target.value))}
              className="bg-transparent text-[#0f4c75] font-extrabold text-lg focus:outline-none cursor-pointer"
            >
              {VALID_YEARS.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Results Summary */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#238dbb]"></span>
            {activeYearEvents.length > 0
              ? `${activeYearEvents.length} Event${activeYearEvents.length > 1 ? 's' : ''} found in ${searchYear}`
              : `No events recorded for ${searchYear}`}
          </h3>

          {activeYearEvents.length > 0 && (
            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
              {activeYearEvents.map((evt) => (
                <button
                  key={evt.id}
                  onClick={() => jumpToEvent(evt.date)}
                  className="text-left bg-white border border-gray-200 hover:border-[#238dbb] hover:shadow-md rounded-2xl p-4 w-72 flex-shrink-0 transition-all group"
                >
                  <p className="text-xs text-[#238dbb] font-bold mb-2 uppercase tracking-wider">
                    {new Date(evt.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-base text-gray-900 font-bold truncate group-hover:text-[#0f4c75] transition-colors">{evt.title}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Big Calendar View */}
      <div className="p-5 md:p-8">

        {/* Calendar Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={prevMonth}
              disabled={displayedYear === 2025 && displayedMonth === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#0f4c75] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-3xl font-extrabold text-[#0f4c75] min-w-[200px] text-center">
              {MONTHS[displayedMonth]} {displayedYear}
            </h2>
            <button
              onClick={nextMonth}
              disabled={displayedYear === 2030 && displayedMonth === 11}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#0f4c75] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5">
            <CalendarIcon size={16} className="text-gray-400" />
            <select
              value={displayedMonth}
              onChange={(e) => setDisplayedMonth(parseInt(e.target.value))}
              className="bg-transparent text-gray-700 font-bold focus:outline-none cursor-pointer"
            >
              {MONTHS.map((m, i) => (
                <option key={m} value={i}>{m}</option>
              ))}
            </select>
            <select
              value={displayedYear}
              onChange={(e) => setDisplayedYear(parseInt(e.target.value))}
              className="bg-transparent text-[#0f4c75] font-extrabold focus:outline-none cursor-pointer ml-2"
            >
              {VALID_YEARS.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-3 gap-x-1 md:gap-x-2 max-w-3xl mx-auto">
          {/* Day Headers */}
          {DAYS.map((day, i) => (
            <div key={`header-${i}`} className="text-center font-bold text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-2">
              {day}
            </div>
          ))}

          {/* Blank Spaces */}
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="h-10 md:h-12"></div>
          ))}

          {/* Days */}
          {days.map(day => {
            const dateStr = `${displayedYear}-${String(displayedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = EVENTS.filter(e => e.date === dateStr);
            const hasEvent = dayEvents.length > 0;
            const isToday = new Date().toISOString().split('T')[0] === dateStr;

            const colIndex = (firstDay + day - 1) % 7;
            let tooltipPos = "lg:left-1/2 lg:right-auto lg:-translate-x-1/2";
            let arrowPos = "left-1/2 -translate-x-1/2";
            if (colIndex <= 1) {
              tooltipPos = "lg:left-0 lg:right-auto lg:translate-x-0";
              arrowPos = "left-8 md:left-12";
            } else if (colIndex >= 5) {
              tooltipPos = "lg:right-0 lg:left-auto lg:translate-x-0";
              arrowPos = "right-8 md:right-12";
            }

            return (
              <div
                key={day}
                className="relative group mx-auto w-full py-1 flex items-center justify-center"
                onClick={(e) => {
                  if (hasEvent) {
                    e.stopPropagation();
                    setActiveTooltip(activeTooltip === dateStr ? null : dateStr);
                  }
                }}
              >
                <div className={`
                  flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-base md:text-lg transition-all duration-300 font-semibold
                  ${hasEvent
                    ? 'bg-[#238dbb] text-white shadow-lg cursor-pointer hover:bg-[#0f4c75] hover:scale-110'
                    : 'text-gray-700 hover:bg-gray-100 cursor-default'}
                `}>
                  {day}
                </div>

                {/* Dots indicator for multiple events */}
                {hasEvent && dayEvents.length > 1 && (
                  <div className="absolute flex gap-1 -bottom-2 md:bottom-0">
                    {dayEvents.map((_, idx) => (
                      <div key={idx} className="w-1.5 h-1.5 rounded-full bg-[#0f4c75]"></div>
                    ))}
                  </div>
                )}

                {/* Event Tooltip */}
                {hasEvent && (
                  <div
                    className={`
                      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm max-h-[85vh] overflow-y-auto z-[100] p-6 bg-white border border-gray-100 rounded-3xl shadow-2xl transition-all duration-300
                      lg:absolute lg:top-auto lg:bottom-full lg:mb-4 lg:w-80 lg:max-h-none lg:overflow-visible lg:-translate-y-0 lg:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] lg:p-5 lg:rounded-2xl
                      ${activeTooltip === dateStr ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none lg:pointer-events-auto lg:group-hover:opacity-100 lg:group-hover:visible'} 
                      ${tooltipPos}
                    `}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={`hidden lg:block absolute -bottom-2 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45 ${arrowPos}`}></div>
                    {dayEvents.map((evt, idx) => (
                      <div key={idx} className={`${idx > 0 ? 'mt-4 pt-4 border-t border-gray-100' : ''}`}>
                        {evt.poster && (
                          <div className="w-full mb-3 rounded-lg overflow-hidden border border-gray-100">
                            <img src={evt.poster} alt={evt.title} className="w-full h-auto object-cover" />
                          </div>
                        )}
                        <p className="text-[#0f4c75] font-extrabold text-sm mb-2 leading-tight">{evt.title}</p>
                        <div className="space-y-1.5 mb-3">
                          <p className="text-gray-500 text-xs flex items-center gap-2 font-medium">
                            <Clock size={14} className="text-gray-400" /> {evt.time}
                          </p>
                          <p className="text-gray-500 text-xs flex items-start gap-2 font-medium">
                            <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                            <span className="leading-snug">{evt.venue}</span>
                          </p>
                        </div>
                        {evt.meetingDetails && (
                          <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100 text-xs text-gray-700 space-y-1">
                            <p><span className="font-bold text-[#0f4c75]">Meeting Number:</span> {evt.meetingDetails.number}</p>
                            <p><span className="font-bold text-[#0f4c75]">Password:</span> {evt.meetingDetails.password}</p>
                            <a href={evt.meetingDetails.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 font-bold hover:underline break-all">Join Meeting Link</a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
