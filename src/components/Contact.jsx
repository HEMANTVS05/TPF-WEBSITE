import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageBanner from './PageBanner';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:c.a.r.c.eindia@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-50 border-t border-gray-200 min-h-screen">
      <PageBanner 
        title="Contact Us" 
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
      />
      
      <div className="container relative z-10 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/5 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSend}>
              <div>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#238dbb]/50 focus:border-[#238dbb] transition-all" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#238dbb]/50 focus:border-[#238dbb] transition-all" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#238dbb]/50 focus:border-[#238dbb] transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full shadow-md">Send Message</button>
            </form>
          </motion.div>
          
          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between gap-8"
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Connect With Us</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you are looking to collaborate, inquire about our research, or join our initiatives, we are here to connect.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-[#238dbb] flex justify-center items-center shadow-sm shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#0f4c75] font-bold">Email</h4>
                    <span className="text-gray-600 text-sm block">c.a.r.c.eindia@gmail.com</span>
                    <span className="text-gray-600 text-sm block">marshall.carce@gmail.com</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-[#238dbb] flex justify-center items-center shadow-sm shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#0f4c75] font-bold">Phone</h4>
                    <span className="text-gray-600 text-sm">+91 6369448490</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-[#238dbb] flex justify-center items-center shadow-sm shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#0f4c75] font-bold">Headquarters</h4>
                    <span className="text-gray-600 text-sm block">No: 3/13a Seetharaman Nagar 4th Street,</span>
                    <span className="text-gray-600 text-sm block">Kodungaiyur, Chennai 600118</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GPS Mini-Map Placeholder */}
            <div className="w-full h-72 bg-gray-900 rounded-3xl overflow-hidden relative shadow-sm border border-gray-100 group">
               <iframe 
                src="https://maps.google.com/maps?q=3/13a%20Seetharaman%20Nagar%204th%20Street%20Kodungaiyur%20Chennai%20600118&t=m&z=15&output=embed&iwloc=near" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Office Location"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 invert-[.95] hue-rotate-180 contrast-125"
              ></iframe>
               <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
