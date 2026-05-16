import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Body */}
      <div className="bg-[#b5d5e5] py-16 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          
          {/* Logo & Info */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="C.A.R.c.E" className="h-16 w-auto mix-blend-multiply" />
              <span className="text-2xl font-extrabold tracking-widest text-[#0f4c75]">C.A.R.c.E</span>
            </Link>
            <div className="flex gap-4 text-[#0f4c75]">
              {/* YouTube */}
              <a href="http://www.youtube.com/@C.A.R.c.E" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              {/* Instagram */}
              <a href="https://www.instagram.com/c.a.r.c.e_india_?igsh=bXd4Ymw0a2h2b29j" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/carce-india-591264381" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
            <div className="text-sm text-[#0f4c75] max-w-sm leading-relaxed space-y-2">
              <p>
                <strong>Address:</strong><br/>
                No: 3/13a Seetharaman Nagar 4th Street,<br/>
                Kodungaiyur, Chennai 600118.
              </p>
              <p>
                <strong>Phone:</strong> +91 6369448490<br/>
                <strong>Email:</strong> c.a.r.c.eindia@gmail.com<br/>
                <strong>Alternate:</strong> marshall.carce@gmail.com
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-[#0f4c75] mb-2">Focus Areas</h4>
            <Link to="/research/coastal-community" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Coastal Community</Link>
            <Link to="/research/maritime-law" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Maritime Law</Link>
            <Link to="/research/security" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Non-Traditional Security</Link>
            <Link to="/research/ecosystem" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Coastal & Maritime Eco-system</Link>
            <Link to="/research/sdg" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Sustainable Development</Link>
          </div>

          {/* Events */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-[#0f4c75] mb-2">Events</h4>
            <Link to="/events/calendar" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Calendar</Link>
            <Link to="/events/conference" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Conference</Link>
            <Link to="/events/seminars-webinars" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Seminars & Webinars</Link>
            <Link to="/events/workshops" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Workshops</Link>
            <Link to="/events/outreach" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Community Outreach</Link>
          </div>

          {/* Blogs */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-[#0f4c75] mb-2">Media & Insights</h4>
            <Link to="/blogs/documentary" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Documentary</Link>
            <Link to="/blogs/podcast" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Podcast</Link>
            <Link to="/blogs/newsletter" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Newsletter</Link>
            <Link to="/blogs/data-collection" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Data Collection</Link>
          </div>

          {/* More From CARCE */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-[#0f4c75] mb-2">More From C.A.R.c.E</h4>
            <Link to="/about" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Partners</Link>
            <Link to="/contact" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Donate Now</Link>
            <Link to="/career" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Careers</Link>
            <Link to="/contact" className="text-[#0f4c75] hover:font-bold transition-all text-sm">Contact Us</Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#073655] py-4 px-6 text-center">
        <p className="text-xs md:text-sm text-gray-300">
          Copyright &copy; {new Date().getFullYear()} | C.A.R.c.E | All Rights reserved | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
}
