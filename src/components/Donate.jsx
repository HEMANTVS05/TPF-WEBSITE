import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from './PageBanner';
import { Heart, IndianRupee } from 'lucide-react';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [100, 200, 300, 400, 500];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    const numVal = parseInt(val, 10);
    if (amounts.includes(numVal)) {
      setSelectedAmount(numVal);
    } else {
      setSelectedAmount(null);
    }
  };

  const currentDonation = parseInt(customAmount, 10) || 0;

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageBanner 
        title="Support Our Cause" 
        imageSrc="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=2070&auto=format&fit=crop" 
      />

      <div className="container max-w-4xl mx-auto px-4 pt-16 relative z-10">
        <motion.div 
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-blue-50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#238dbb]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <div className="w-20 h-20 bg-blue-50 text-[#238dbb] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Heart size={36} className="fill-[#238dbb]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f4c75] mb-4">Make a Difference Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Your contribution helps us continue our research, community outreach, and efforts to support coastal development and maritime security.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Select Donation Amount</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`py-3 px-2 rounded-2xl font-bold text-lg transition-all duration-300 border-2 flex items-center justify-center gap-1 ${
                      selectedAmount === amount 
                        ? 'bg-[#0f4c75] text-white border-[#0f4c75] shadow-lg transform scale-105' 
                        : 'bg-white text-[#0f4c75] border-blue-100 hover:border-[#238dbb] hover:bg-blue-50'
                    }`}
                  >
                    <IndianRupee size={18} strokeWidth={3} /> {amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IndianRupee className="text-gray-400" size={20} />
                </div>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none text-lg font-bold text-gray-800 transition-all ${
                    customAmount ? 'border-[#0f4c75] bg-blue-50/30' : 'border-gray-200 focus:border-[#238dbb]'
                  }`}
                />
              </div>
            </div>

            {/* Personal Details Form (Placeholder for look) */}
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#238dbb] outline-none transition-colors bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#238dbb] outline-none transition-colors bg-gray-50 focus:bg-white" />
                </div>
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#238dbb] outline-none transition-colors bg-gray-50 focus:bg-white" />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${
                currentDonation > 0 
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#238dbb] text-white hover:shadow-2xl hover:scale-[1.02]' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!currentDonation || currentDonation <= 0}
            >
              Donate <IndianRupee size={20} strokeWidth={3} /> {currentDonation || '0'} Now
            </button>
            <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Secure payment processed via Razorpay
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
