import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import PageBanner from './PageBanner';
import session1Poster from '../assets/session1.jpeg';
import session2Poster from '../assets/session2.jpeg';
import session3Poster from '../assets/session3.jpeg';
import session4Poster from '../assets/session4.jpeg';
import session5Poster from '../assets/session5.jpeg';
import session6Poster from '../assets/session6.jpeg';
import session7Poster from '../assets/session7.jpeg';
import session8Poster from '../assets/session8.jpeg';

// All 8 sessions data
export const internshipSessionsData = [
  {
    id: '1',
    poster: session1Poster,
    month: 'may',
    monthLabel: 'May 2026',
    sessionNumber: 1,
    title: 'From Thirst to Conflict: Water Security as a Weapon in Asymmetric Wars',
    speaker: 'Dr. O. Nirmala',
    speakerDetails: 'Assistant Professor and Head, Department of Defence and Strategic Studies, Dean School of Humanities, Guru Nanak College (Autonomous)',
    date: '15 May 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: 'O5yHdCbfJTQ',
    overview: `The meeting features Dr. O. Nirmala, an expert in strategic studies and energy security, delivering a comprehensive lecture on the strategic significance of water and its role as a weapon in asymmetric warfare. She outlines how water, beyond being a basic necessity, is a critical resource influencing national security, economic stability, and civilian welfare. Dr. Nirmala illustrates the multifaceted impacts of water scarcity, including political instability, economic disruption, and humanitarian crises, supported by historical and contemporary case studies such as militant control of water infrastructure in Iraq and Syria.

Key topics include the power dynamics of upstream and downstream water control, the strategic importance of dams, and the geopolitical tensions exemplified by the Nile River dispute. She emphasizes the internal water disputes within India, highlighting their social and political ramifications. Dr. Nirmala stresses the need for future preparedness through strengthened water diplomacy, data sharing, securing critical infrastructure against physical and cyber threats, and investing in technology like desalination and satellite monitoring.

The discussion also addresses the challenges of forming water-sharing treaties, particularly between India and China, attributing difficulties to political relations and strategic interests. Environmental and social consequences of dam construction, including displacement and ecosystem damage, are acknowledged as factors that can exacerbate conflicts. Additionally, the session touches on the environmental impact of AI data centers' water consumption, linking it to broader concerns of environmental and energy security within asymmetric warfare contexts.

Throughout the session, Dr. Nirmala engages participants with clarifications and examples, underscoring that while technology is a valuable tool, effective governance and cooperation are essential to managing water conflicts and securing national interests in an increasingly complex geopolitical landscape.`,
  },
  {
    id: '2',
    poster: session2Poster,
    month: 'may',
    monthLabel: 'May 2026',
    sessionNumber: 2,
    title: 'Dams as Double Edged Swords: Weaponization, Diplomacy and Transboundary Security',
    speaker: 'Dr. O. Nirmala',
    speakerDetails: 'Assistant Professor and Head, Department of Defence and Strategic Studies, Dean School of Humanities, Guru Nanak College (Autonomous)',
    date: '16 May 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: '7YFd6b5fBqk',
    overview: `The meeting features Dr. O. Nirmala delivering an in-depth lecture on the strategic, environmental, and geopolitical dimensions of dams, continuing from a previous session. Dr. Nirmala frames dams as vital infrastructure for irrigation, energy, and flood control, while also highlighting their potential as strategic weapons in transboundary water politics, especially concerning China and neighboring countries.

The discussion covers the dual nature of dams as tools for development and sources of conflict, emphasizing the importance of hydro diplomacy exemplified by the Indus Water Treaty. Environmental and social impacts, including displacement and ecological imbalance, are addressed alongside the critical need for dam safety and maintenance to prevent disasters. Students actively participate, raising pertinent questions about geopolitical challenges and dam security, with Dr. Nirmala providing clarifications and encouraging feedback.

The session underscores the complexity of water as a resource integral to comprehensive national security, blending technical, diplomatic, and environmental considerations.`,
  },
  {
    id: '3',
    poster: session3Poster,
    month: 'may',
    monthLabel: 'May 2026',
    sessionNumber: 3,
    title: 'OSINT in Maritime Security: AIS, Vessel Behaviours and Suspicious Maritime Patterns',
    speaker: 'Mr. James Vasanth L',
    speakerDetails: 'Project Associate, Divsight Intelligence Pvt Ltd',
    date: '21 May 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: 'eAtJ6lr4YZU',
    overview: `The meeting features James Vasanth L, a defence research analyst specializing in maritime security, open source intelligence, and military analysis, presenting an in-depth session on maritime domain awareness and security challenges in the Indian Ocean region. He outlines the strategic importance of maritime choke points, legal frameworks like UNCLOS, and the critical role of bathymetric data in naval operations.

James highlights Chinese maritime activities, including intelligence gathering via research vessels during Indian missile tests, and explains the dual-use nature of civilian and military maritime assets post-2014 Chinese military reforms.

A significant portion of the session focuses on the Automatic Identification System (AIS) technology, its operational principles, vulnerabilities such as spoofing and dark vessels, and James's own development of algorithms and hardware to decrypt and analyze AIS data for anomaly detection. The live demo illustrates real-time vessel tracking near Chennai port, emphasizing the detection of suspicious behaviors and the use of open source data for maritime analytics.

Participants raise pertinent questions about the legality of foreign vessels operating near Indian coasts, international maritime law enforcement, and the protection of underwater infrastructure like optical fiber cables. James provides clarifications on UNCLOS provisions, enforcement within exclusive economic zones, and the challenges posed by underwater threats.`,
  },
  {
    id: '4',
    poster: session4Poster,
    month: 'may',
    monthLabel: 'May 2026',
    sessionNumber: 4,
    title: 'South Asian River System: Strategic Interplay of Regional Politics',
    speaker: 'Mr. D. Thirumaran',
    speakerDetails: 'Assistant Professor and Head, PG and Research Department of Defence and Strategic Studies, Voorhees College',
    date: '23 May 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: 'Ca2-nGlU3cg',
    overview: `Dr. D. Thirumaran, Head of the Department of Defence and Strategic Studies, leads a detailed session on the strategic interplay of South Asian river systems and regional politics. He emphasizes the critical importance of water resources in a region housing 60% of the world's population and multiple nuclear powers, including India, Pakistan, and China. Using realism and environmental security theories, he explains how water scarcity and resource competition drive regional instability and power dynamics.

A significant focus is on the Indus Waters Treaty between India and Pakistan, which India has suspended due to security concerns linked to Pakistan's alleged proxy terrorism. This suspension disrupts water sharing, halts data exchange, and raises risks of military conflict and humanitarian crises. Dr. Thirumaran highlights China's upstream control over key rivers, which poses additional strategic challenges for India.

The session also addresses the challenges of regional cooperation, noting SAARC's limited strategic role and the growing influence of China in neighboring countries like Bangladesh and Nepal. Overall, the discussion underscores the complex geopolitical and environmental factors shaping South Asian water politics and the strategic imperatives facing India and its neighbors.`,
  },
  {
    id: '5',
    poster: session5Poster,
    month: 'may',
    monthLabel: 'May 2026',
    sessionNumber: 5,
    title: 'Importance of Concepts and Variables in Social Science Research',
    speaker: 'Dr. M. Venkataraman',
    speakerDetails: 'Professor, Department of National Security Studies, Central University of Jammu',
    date: '29 May 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: 'pDeMovDw3Pc',
    overview: `The webinar featured Dr. M. Venkataraman, a seasoned professor specializing in international relations and security studies, who delivered an in-depth lecture on the critical role of concepts and variables in social science research. Ms. Tejesvi and CARcE - Team facilitated the session and managed.

Dr. Venkataraman emphasized the necessity of clear conceptual definitions to avoid ambiguity and ensure accurate measurement. He distinguished between concrete and abstract concepts, highlighting the challenges in operationalizing variables and selecting appropriate indicators. The discussion underscored the importance of reliability and validity in research measurements and the scientific imperative to establish relationships between variables through hypotheses.

Throughout the session, Dr. Venkataraman encouraged participant engagement and stressed the importance of comprehension over mere attendance. The meeting concluded with an open floor for questions, which saw limited interaction, and expressions of gratitude from the organizers. This session provided valuable methodological insights for researchers engaged in social science disciplines, particularly those focusing on international relations and security studies.`,
  },
  {
    id: '6',
    poster: session6Poster,
    month: 'june',
    monthLabel: 'June 2026',
    sessionNumber: 6,
    title: 'Waterborne Diseases in Conflict Zones: From Cholera to Marine Pollution-Related Illness',
    speaker: 'Dr. R. Mathivanan',
    speakerDetails: 'MBBS, MHA, AFIH — Medical Officer',
    date: '06 June 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: 'ECQQxTbkPRc',
    overview: `Dr. R. Mathivanan, a medical officer specializing in industrial and occupational medicine, leads an extensive session covering waterborne diseases and environmental health challenges in coastal conflict zones. He discusses the socio-economic hardships faced by coastal populations, including the impact of war, climate change, and government neglect, emphasizing the need for awareness and prevention.

The presentation reviews a range of waterborne and vector-borne diseases such as cholera, typhoid fever, amoebiasis, schistosomiasis, filariasis, malaria, and dengue, detailing their transmission, symptoms, complications, and public health measures. Dr. Mathivanan highlights historical insights, vaccination efforts, and challenges like record tampering and limited effectiveness of mosquito control programs.

Environmental concerns including mercury pollution, marine pollution from algal blooms, and the ecological role of mosquitoes are addressed, underscoring the complexity of balancing human health with ecosystem preservation. The devastating effects of sea mines in conflict zones on marine life and coastal communities are explained, with a call for peaceful conflict resolution. Dr. Mathivanan advocates for empowering coastal communities through education, self-sufficiency, and improved health to foster resilience and reduce disease burden.`,
  },
  {
    id: '7',
    poster: session7Poster,
    month: 'june',
    monthLabel: 'June 2026',
    sessionNumber: 7,
    title: 'The Teesta Dilemma: Hydro-Politics, Regional Tensions, and the Search for a Water Peace in South Asia',
    speaker: 'Commodore SL Deshmukh NM (Rtd, Indian Navy)',
    speakerDetails: 'Retired Commodore, Indian Navy',
    date: '08 June 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: 'GAR9ex_8R_M',
    overview: `The meeting features Commodore SL Deshmukh, a retired Indian Navy officer, delivering an in-depth presentation on water diplomacy, hydrohegemony, and the longstanding Teesta water dispute between India and Bangladesh. Deshmukh outlines water diplomacy as a cooperative approach to managing shared water resources, contrasting it with hydrohegemony exemplified by China's dam construction on the Brahmaputra River.

The discussion traces the historical and geopolitical significance of the Teesta River, highlighting its vital role in agriculture, hydroelectric power, and livelihoods across both nations. Despite multiple negotiations since 1947, the dispute remains unresolved, primarily due to political objections within India's West Bengal state.

Broader geopolitical concerns are addressed, particularly China's strategic use of infrastructure investments and 'debt traps' to exert influence over neighboring countries, potentially undermining India's security interests, especially in the sensitive northeastern corridor. The session concludes with a call for unity among Indian states and citizens to support government efforts in resolving water disputes, safeguarding national interests, and countering external interference.`,
  },
  {
    id: '8',
    poster: session8Poster,
    month: 'june',
    monthLabel: 'June 2026',
    sessionNumber: 8,
    title: 'Law, Governance, and Security of Ports and Coastal Infrastructure',
    speaker: 'Nicole Evany J',
    speakerDetails: 'Advocate & Company Secretary, Surana & Surana International Attorneys, Chennai',
    date: '12 June 2026',
    time: 'Online Session',
    venue: 'Online (Virtual)',
    youtubeId: '5YNpoWxwVHw',
    overview: `The meeting featured Nicole Evany J, an advocate and company secretary from the Chennai-based law firm Surana and Surana, who presented an in-depth analysis of legal governance and security of ports and coastal infrastructure. She emphasized the strategic importance of ports in global trade, energy supply, and national defense, highlighting their multifaceted roles and vulnerabilities.

Nicole detailed India's domestic legal framework governing ports, including the colonial-era Indian Ports Act of 1908 and the modern Major Ports Authorities Act of 2021, which grants autonomy and commercial powers to major ports. She also explained the international legal context, focusing on the United Nations Convention on the Law of the Sea (UNCLOS) as the foundational treaty regulating maritime zones and navigation rights.

A significant portion of the discussion addressed the concept of 'lawfare,' where legal and regulatory tools such as zoning laws, environmental clearances, and sanctions are strategically employed to control maritime access and activities without physical conflict. Nicole concluded by identifying emerging challenges such as incomplete deep-sea mining regulations, the effects of rising sea levels on maritime boundaries, and legal complexities in maritime crisis management.`,
  },
];

const months = [
  { key: 'may', label: 'May 2026' },
  { key: 'june', label: 'June 2026' },
];



export default function InternshipReports() {
  const [activeMonth, setActiveMonth] = useState('may');
  const navigate = useNavigate();

  const filteredSessions = internshipSessionsData.filter(s => s.month === activeMonth);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <PageBanner
        title="Internship Reports"
        imageSrc="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1170&auto=format&fit=crop"
      />

      <div className="container max-w-6xl relative z-10 pt-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/library/other-reports')}
          className="flex items-center gap-2 text-[#0f4c75] font-semibold mb-10 hover:text-[#238dbb] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Other Reports
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#238dbb]/10 text-[#0f4c75] rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            Internship Program
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Internship Sessions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Expert-led sessions covering water security, maritime law, OSINT, public health in conflict zones, and more — conducted as part of the C.A.R.c.E. Internship Program.
          </p>
        </div>

        {/* Month Tabs */}
        <div className="flex items-center gap-3 mb-12 flex-wrap">
          {months.map((month) => (
            <button
              key={month.key}
              onClick={() => setActiveMonth(month.key)}
              className={`px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                activeMonth === month.key
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#238dbb] text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#238dbb] hover:text-[#238dbb]'
              }`}
            >
              {month.label}
            </button>
          ))}
        </div>

        {/* Session Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMonth}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={`/library/internship-sessions/${session.id}`}
                  className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 block transform hover:-translate-y-2"
                >
                  {/* Poster Area */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={session.poster}
                      alt={session.title}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay - only appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Content - slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <span className="inline-block px-3 py-1 bg-[#238dbb]/30 backdrop-blur-md border border-[#238dbb]/40 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                        Session {session.sessionNumber}
                      </span>
                      <h4 className="text-sm font-bold !text-white mb-2 drop-shadow-lg leading-snug line-clamp-2">
                        {session.title}
                      </h4>
                      <div className="space-y-1 text-xs font-medium text-gray-200">
                        <p className="flex items-center gap-2">
                          <Calendar size={12} className="shrink-0" /> {session.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock size={12} className="shrink-0" /> {session.time}
                        </p>
                        <p className="flex items-start gap-2">
                          <MapPin size={12} className="mt-0.5 shrink-0" />
                          <span className="leading-snug">{session.venue}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
