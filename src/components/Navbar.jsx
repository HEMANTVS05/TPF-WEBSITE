import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

const navItems = [
  {
    name: 'About Us',
    path: '/',
    hash: '#about-us',
    subItems: [
      { name: 'Our Team', path: '/team' },
      { name: 'Gallery', path: '/gallery' }
    ]
  },
  {
    name: 'Research Areas',
    path: '/research',
    subItems: [
      { name: 'Coastal Community', path: '/research/coastal-community' },
      { name: 'Maritime Law', path: '/research/maritime-law' },
      { name: 'Non-Traditional Security Threat', path: '/research/security' },
      { name: 'Coastal and Maritime Eco-system', path: '/research/ecosystem' },
      { name: 'Sustainable Development Goals', path: '/research/sdg' }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    subItems: [
      { name: 'Calendar', path: '/events/calendar' },
      { name: 'Conference', path: '/events/conference' },
      { name: 'Seminar and Webinar', path: '/events/seminars-webinars' },
      { name: 'Workshops', path: '/events/workshops' },
      { name: 'Community Outreach', path: '/events/outreach' }
    ]
  },
  {
    name: 'Library',
    path: '/library',
    subItems: [
      { name: 'Publication', path: '/library/publication' },
      { name: 'Articles', path: '/library/articles' },
      { name: 'Monthly Magazines', path: '/library/magazines' },
      { name: 'Research Report', path: '/library/reports' },
      { name: 'Other Reports', path: '/library/other-reports' }
    ]
  },
  {
    name: 'Blogs',
    path: '/blogs',
    subItems: [
      { name: 'Documentary', path: '/blogs/documentary' },
      { name: 'Newsletter', path: '/blogs/newsletter' },
      { name: 'Podcast', path: '/blogs/podcast' },
      { name: 'Data Collection', path: '/blogs/data-collection' }
    ]
  },
  {
    name: 'Career',
    path: '/career',
    subItems: [
      { name: 'Volunteers', path: '/career/volunteers' },
      { name: 'Internships', path: '/career/internships' }
    ]
  },
  {
    name: 'Contact Us',
    path: '/contact',
    subItems: []
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, item) => {
    if (item.hash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 pt-4 md:px-8 md:pt-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 py-3 px-6 md:px-8 bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white shadow-sm bg-white shrink-0 flex items-center justify-center">
              <img src={logoImg} alt="C.A.R.c.E" className="w-full h-full object-contain rounded-full scale-110" />
            </div>
            <span className="text-xl md:text-2xl font-extrabold tracking-widest text-[#0f4c75] hidden sm:block">C.A.R.c.E</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hash ? (
                  <a href={item.hash} onClick={(e) => handleNavClick(e, item)} className={`flex items-center gap-1.5 text-[0.95rem] font-medium transition-colors duration-300 py-2 ${location.hash === item.hash ? 'text-[#238dbb]' : 'text-gray-800 hover:text-[#238dbb]'}`}>
                    {item.name}
                    {item.subItems.length > 0 && <ChevronDown size={14} className="mt-0.5 transition-transform duration-300 group-hover:rotate-180" />}
                  </a>
                ) : (
                  <Link to={item.path} className={`flex items-center gap-1.5 text-[0.95rem] font-medium transition-colors duration-300 py-2 ${location.pathname === item.path ? 'text-[#238dbb]' : 'text-gray-800 hover:text-[#238dbb]'}`}>
                    {item.name}
                    {item.subItems.length > 0 && <ChevronDown size={14} className="mt-0.5 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>
                )}

                <AnimatePresence>
                  {item.subItems.length > 0 && activeDropdown === index && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 min-w-[280px] p-2 mt-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl"
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul className="flex flex-col gap-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.path} className="block px-4 py-3 text-sm text-gray-800 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-sm hover:text-[#238dbb] hover:pl-6">{subItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link to="/donate" className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0f4c75] to-[#238dbb] hover:from-[#0a3554] hover:to-[#1a6b8f] !text-white hover:!text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <span>Donate Us</span>
            </Link>
            <div className="block lg:hidden cursor-pointer text-[#0f4c75]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-4 right-4 mt-4 p-4 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden z-50 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-gray-200/50 last:border-none">
                  <div className="flex justify-between items-center p-4 text-lg font-medium text-gray-800 cursor-pointer">
                    {item.hash ? (
                      <a href={item.hash} onClick={(e) => handleNavClick(e, item)} className={`flex-grow ${location.hash === item.hash ? 'text-[#238dbb]' : ''}`}>{item.name}</a>
                    ) : (
                      <Link to={item.path} className={`flex-grow ${location.pathname === item.path ? 'text-[#238dbb]' : ''}`}>{item.name}</Link>
                    )}
                    {item.subItems.length > 0 && (
                      <div onClick={() => setActiveDropdown(activeDropdown === index ? null : index)} className="p-2">
                        <ChevronDown size={18} className={`transition-transform duration-300 text-gray-500 ${activeDropdown === index ? 'rotate-180 text-[#238dbb]' : ''}`} />
                      </div>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.subItems.length > 0 && activeDropdown === index && (
                      <motion.ul
                        className="pl-6 pb-4 overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <ul className="py-2">
                          {item.subItems.map((subItem, idx) => (
                            <li key={idx}>
                              <Link to={subItem.path} className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#238dbb]/10 hover:text-[#0f4c75] font-medium transition-colors" onClick={() => setActiveDropdown(null)}>
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li className="border-t border-gray-200/50 mt-2 pt-4 px-4 pb-2">
                <Link to="/donate" className="flex items-center justify-center w-full bg-gradient-to-r from-[#0f4c75] to-[#238dbb] !text-white hover:!text-white px-5 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-shadow">
                  Donate Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
