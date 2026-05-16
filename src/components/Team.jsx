import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from './PageBanner';
import SectionTitle from './SectionTitle';
import marshall from '../assets/marshallanto.png'
import kousik from '../assets/koushikraj.png'
import daleeya from '../assets/daleeyadehingia.png'
import lokeshwari from '../assets/lokeshwari.png'
import tamilvendhan from '../assets/tamil.png'
import vigneshwaran from '../assets/vigneshwaran.png'
import kabilan from '../assets/perunthamizh.png'
import jegathesh from '../assets/jegathesh.png'
import kanimozhi from '../assets/kanimozhi.png'
import tejesvi from '../assets/tejesvi.png'
import yukesh from '../assets/yukesh.png'
import deepanwita from '../assets/deepanwita.png'
import dhanya from '../assets/dhanya.png'
import nitish from '../assets/nitish.png'
import hasini from '../assets/hasini.png'
import yogitha from '../assets/yogitha.png'
import aman from '../assets/aman.png'

import utham from '../assets/utham.png'
import manickam from '../assets/manickam.png'
import prabhakaran from '../assets/prabhakaran.png'
import hillar from '../assets/hiller.png'
import srinivasan from '../assets/srinivasan.png'
import santosh from '../assets/santhosh.png'
import thirumaran from '../assets/thiru.png'
import nirmala from '../assets/nirmala.png'
import tafsir from '../assets/tafsir.png'
import ourteam from '../assets/ourteam.jpg'




const governingCouncil = [
  {
    name: "Mr Marshall Anto I",
    role: "Founder & Chairman",
    desc: "Hold both undergraduate and postgraduate degrees in Defence and Strategic Studies from the University of Madras. At present I work as Assistant Professor in Department of Defence and Strategic Studies, The New College, Chennai. My primary academic and research interest lies in the study of terrorism and its extensive implications for global geopolitics, with a particular emphasis on maritime security. I am deeply engaged in exploring how terrorist activities influence national and international policy, affect regional stability, and reshape global power structures. Positioned at the crossroads of security studies, strategic affairs, and international relations, my work aims to foster informed dialogue and contribute to strategic thinking on the pressing security challenges of our time.",
    image: marshall
  },
  {
    name: "Mr Kousik Raj P",
    role: "President",
    desc: "holds a postgraduate degree in Defence and Strategic Studies from the University of Madras, following his undergraduate studies in commerce. He currently serves as an Assistant Professor in the Department of Defence and Strategic Studies at The New College, Chennai. His research interests focus on national security issues, particularly those affecting coastal regimes. In addition to his academic pursuits, he is a trained open water swimmer with over two years of experience in sea swimming.",
    image: kousik
  },
  {
    name: "Ms Daleeya Dehingia",
    role: "General Secretary",
    desc: "Daleeya is a Research Analyst at Dragonfly Intelligence, with a master’s in Defence and Strategic Studies from the University of Madras. She holds a Political Science degree from the University of Delhi and has briefly worked as a Consular Assistant at the Honorary Consulate of Mauritius. Her experience spans interning at DRDO’s Combat Vehicles R&D Establishment and serving as a conflict negotiator and translator for the Greater Chennai Police. At Delhi University, she led as President of the North East Students' Cell. Daleeya has been a regular at academic conferences and has actively organised numerous inter-college events. A sports enthusiast, she’s passionate about travel, culture, and volunteering for social and environmental causes.",
    image: daleeya
  },
  {
    name: "Ms Lokeshwari Jothi Natrajan",
    role: "Treasurer",
    desc: "An Assistant Professor and a graduate in Defence and Strategic Studies from the University of Madras. With a solid academic grounding in national security, strategic affairs, and geopolitical dynamics. A keen enthusiast of maritime issues, takes a special interest in the evolving role of the oceans in global security, naval strategy, and regional stability. Her work reflects a deep commitment to exploring the intersections of maritime security, strategic policy, and international relations. Whether through teaching, research, or field engagement. She aims to contribute meaningfully to discussions on India's maritime interests and the broader Indo-Pacific region.",
    image: lokeshwari
  },
  {
    name: "Mr Tamil Vendhan Anbarasan",
    role: "Operations Co-ordinator",
    desc: "Tamilvendhan Anbarasan holds a Master’s degree in Defence and Strategic Studies from the University of Madras and currently serves as an Assistant Professor at Maruthupandiyar College of Arts  and Science ( Thanjavur). He is also working as the Operations Co-ordinator at the Council for Aquademic Research and Coastal Empowerment (C.A.R.c.E)",
    image: tamilvendhan
  },
  {
    name: "Mr Vigneshwaran Venkatesan",
    role: "BOARD MEMBER",
    desc: "Vigneshwa  ran Venkatesan is a UGC-Senior Research Fellow conducting interdisciplinary research in Criminology and Defence Studies at the University of Madras. His research focuses on the smuggling of migrants by sea and the implementation of the UNTOC and its Migrant Smuggling Protocol. He holds a master’s degree in Criminology and Criminal Justice Administration. His areas of interest include non-traditional security threats, maritime crimes, and transnational organised crime. He has also held academic and research positions at leading institutions in Chennai.",
    image: vigneshwaran
  },
  {
    name: "Mr Perunthamizh Kabilan .N",
    role: "BOARD MEMBER",
    desc: "N Perunthamizh Kabilan is a Guest Lecturer at the Department of Defence Studies, Government Arts College, Coimbatore. He holds degrees in Hotel Management and Defence and Strategic Studies, including a postgraduate and M.Phil. from the University of Madras. Known for promoting practical-oriented teaching methods, he has contributed to defence education across Tamil Nadu. His recent work focuses on raising awareness among youth about the critical importance of coastal security in India.",
    image: kabilan
  },
  {
    name: "Mr S JEGATHESH KUMAR",
    role: "BOARD MEMBER",
    desc: "S. Jegathesh Kumar is a UGC-Junior Research Fellow conducting research in Criminology at the University of Madras. His research focuses on IUU Fishing and other Blue crimes. He holds a master’s degree in Criminology and Criminal Justice. He has also held an academic position at leading institution in Madurai.",
    image: jegathesh
  },
  {
    name: "Ms KANIMOZHI NAGARAJAN",
    role: "BOARD MEMBER",
    desc: "Kanimozhi Nagarajan brings a strong foundation in commerce and finance, with a B.Com (Corporate Secretaryship) degree from Ethiraj College (2024), complemented by training in Investment Banking. Her career journey led her into Human Resources, where she currently excels in Talent Acquisition for a leading US-based medical billing company. Driven by a passion for people, process, and performance, she is focused on identifying and onboarding top talent in the dynamic US healthcare space. Her interests span organizational development, strategic hiring, and creating meaningful experiences with people.",
    image: kanimozhi
  },
  {
    name: "Ms Tejesvi",
    role: "SOCIAL MEDIA HEAD",
    desc: "Tejesvi is a social media manager with a background in Journalism and Defence & Strategic Studies. She excels in copywriting, social media management, and editing. With a passion for storytelling, she creates engaging content and drives digital engagement. She brings a unique perspective to her work, focusing on effective communication and innovative solutions.",
    image: tejesvi
  },
  {
    name: "Ms Yukesh Ramesh",
    role: "Internship co-ordinator",
    desc: "Yukesh Ramesh, a postgraduate of Defence and Strategic Studies, is intrigued by the scope of security challenges. His expertise spans diverse security domains, reinforced by an internship at the Defence Research and Development Organisation (DRDO), yet he is particularly drawn towards energy politics with its evolving landscapes. To further consolidate his knowledge in this area, he has undertaken relevant certificate courses, including Politics and Economics of International Energy from SciencesPo university, Energy Efficiency Indicators: Essentials for Policy Making from the International Energy Agency (IEA), and Control of Radioactive Material Inadvertently Incorporated Into Scrap Metals from the International Atomic Energy Agency (IAEA). Equally important, his engagement in social volunteerism has significantly shaped him, and he has a sustained record of National Service engagement throughout his undergraduate and postgraduate studies. Enlightened by the ramifications on the natural ecosystem of energy sectors, he has disseminated research findings (Energy Security) in a few seminars and conferences.",
    image: yukesh
  },
  {
    name: "Ms Deepanwita Dehingia",
    role: "Social media",
    desc: "Deepanwita is currently pursuing her Bachelors in Modern Office Management from the University of Delhi. With a strong foundation in administrative management and digital communication, she has developed practical skills in human resource management functions, social media management, designing content, and website coordination. She has experience handling tasks like recruitment support, maintaining learning management systems (LMS), maintaining websites, and contributing to improving user experience and engagement. With a proactive and organized approach, Deepanwita brings creativity, efficiency, and people skills to every role blending HR understanding with digital and operational expertise.",
    image: deepanwita
  },
  {
    name: "Ms Dhanya D",
    role: "Member",
    desc: "Dhanya D is a Research Scholar at the Department of Defence and Strategic Studies, University of Madras. My research focuses on India's Submarine Building Capability. She completed her graduation in English Literature and holds a Post-Graduation in Defence and Strategic Studies from the University of Madras.",
    image: dhanya
  },
  {
    name: "Mr S Nitish",
    role: "Legal Team",
    desc: "Nitish S holds undergraduate degrees in Law and Arts from the School of Excellence in Law, Tamil Nadu Dr. Ambedkar Law University, Chennai. He is currently a Junior Advocate at the Madras High Court under Senior Counsel Silambanan (Kaavya Silambanan Associates), assisting in civil and criminal matters, including NCLT, CAT, ADR, and Mediation. Nitish is skilled in case law analysis, client counselling, and legal reporting. With strong research and communication skills, he is committed to a career combining legal expertise with public responsibility.",
    image: nitish
  },
  {
    name: "Ms Hasini Sahana Swaminathan",
    role: "Legal Team",
    desc: "Hasini Sahana Swaminathan holds an undergraduate degree in Law and Computer Applications from the School of Excellence in Law, Tamil Nadu Dr. Ambedkar Law University, Chennai. She currently works in the Office of the Additional Public Prosecutor at the Madras High Court, assisting in criminal litigation and prosecution. Her interests lie in litigation, intellectual property rights, and public policy. She has presented at national seminars, published on toxic torts, and is WIPO-certified in IP. She is dedicated to law for justice and governance.",
    image: hasini
  },
  {
    name: "Dr. Yogitha",
    role: "Medical Team",
    desc: "I am a committed and enthusiastic medical graduate with distinctions in two core medical subjects and a well-rounded background that blends clinical excellence with creativity and leadership. I recently completed my MBBS and compulsory rotatory internship, gaining practical experience across key specialties such as Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynaecology, and Emergency Medicine.\nDuring my academic journey, I actively participated in research and was proud to receive recognition through poster presentation awards at intra-college academic events. These opportunities sharpened my interest in evidence-based medicine and medical communication.\nBeyond academics, I served as the Batch Representative, acting as the primary bridge between students and faculty—a role that developed my organizational, leadership, and problem-solving skills. I also believe in a holistic approach to life and learning, which led me to engage in cultural activities, particularly college singing competitions and events that nurtured my confidence and teamwork.\nWith a passion for continuous growth, I am now looking to pursue further specialization in Surgery and to contribute meaningfully to patient care, research, and interdisciplinary collaboration.",
    image: yogitha
  },
  {
    name: "Dr. Aman Praveen",
    role: "Medical Team",
    desc: "Dr. Aman Praveen is a dedicated medical professional with an MBBS degree, committed to providing quality healthcare and patient-centered medical services. With a strong foundation in clinical practice and medical knowledge, he is passionate about promoting health awareness, preventive care, and effective treatment. Known for his compassionate approach and professional ethics, Dr. Aman Praveen continues to contribute to the medical field through his commitment to patient wellbeing and continuous learning.",
    image: aman
  }
];

const advisoryCouncil = [
  {
    name: "Dr S Utham Kumar Jamahagni",
    role: "Professor",
    desc: "S. Utham Kumar Jamadhagni is currently Professor and Head, Department of Defence and Strategic Studies, and Dean, College Development Council,University of Madras. In addition to a doctorate in Defence & Strategic Studies, he also holds a post graduate degree in Political Science. Further, he has an Advanced International Diploma from the Dept. of Peace and Conflict Research at the University of Uppsala in Sweden. He is also an Alumnus of Regional Centre for Strategic Studies, Colombo and Salzburg seminar, Austria. He was a visiting fellow to the Centre for South Asian Studies, University of Hull, United Kingdom. Dr. Utham earlier led an Indian Youth Delegation to Japan to debate on Japan and South Asian Peace and Stability organized by Ministry of Foreign Affairs, Japan. He was also an Australia-India Council Fellow, as well as International Visitor Fellow of the Dept. of State, United States of America. Utham Kumar has received many research grants including White House Historical Association Research Grant, Gerard Ford Foundation Research Centre’s Lubin-Winant research grant and JFK foundation Grants from USA. He is on academic boards of various universities. He regularly contributes articles and book chapters on National security issues. He continues to address National Defence College, New Delhi; Naval War College, Goa; Defence Services Staff College, Wellington and Officers’ Training Academy, Chennai on topics of Strategy, policy, maritime security and International Relations.",
    image: utham
  },
  {
    name: "Dr. MANICKAM VENKATARAMAN",
    role: "Professor",
    desc: "Manickam Venkataraman is currently Professor at the Department of National Security Studies, Central University of Jammu. He served as Associate Professor at the Centre for Indo-Pacific Studies, JNU, New Delhi for two years and as Assistant Professor teaching in the Department of Defence and Strategic Studies for about eight years (2014 to 2023). He also taught in various capacities in Africa for 15 years his last position in Africa being Associate Professor of Political Science and International Relations, Addis Ababa University, Ethiopia between 2004 and 2014. Besides, he was a visiting Professor at the Department of History and International Relations, Universidad De Las Americas, Puebla, Mexico during the summer of 2005. He has widely travelled in Africa, South and Southeast Asian countries. His professional training was in Defence and Strategic Studies and International Relations and graduated from the University of Madras in 1989 and took his PhD from the Centre for South and Southeast Asian Studies in 1997 specializing on ASEAN - China relations. In all, he has about 26 years of teaching and research experience to his credit besides publications in several peer reviewed international journals. His research interests include foreign and security policy, peace and conflict studies and maritime security issues in the Indo Pacific region.",
    image: manickam
  },
  {
    name: "Dr. E. PRABHAKARAN",
    role: "Associate Professor",
    desc: "Dr. E. Prabhakaran is an Associate Professor in the Department of Defence and Strategic Studies at University of Madras. He specialized in National Security and completed his higher education in Defence and Strategic Studies at the University of Madras. With extensive academic experience in the field of security studies, he has been actively involved in teaching, research, and academic development related to defence and strategic affairs. Dr. Prabhakaran has published around 14 research papers and articles in Indian and international journals and has presented papers at several national and international seminars and conferences. He has also organized and participated in numerous workshops, seminars, and academic programmes focusing on security and strategic issues. His major areas of specialization include International Terrorism, Internal Security Issues, National Security, and Strategic Studies, and his scholarly work has contributed to discussions on terrorism, policing, military history, and India’s security challenges.",
    image: prabhakaran
  },
  {
    name: "Dr. I. HILLER ARMSTRONG",
    role: "Assistant Professor",
    desc: "Dr. I. Hiller Armstrong is an Assistant Professor in the Department of Defence and Strategic Studies at University of Madras. Holding M.A., M.Phil., and Ph.D. degrees, he has established himself as an academic in the field of strategic and regional studies. He has contributed significantly to teaching and research in defence and international relations, with particular emphasis on South and Southeast Asian affairs. Dr. Armstrong has published around 13 research articles in Indian and international journals and has presented papers at various national and international seminars and conferences. In addition, he has actively organized and participated in nearly 35 workshops and seminars related to defence, security, and regional strategic issues. His area of specialization includes South and Southeast Asia, and his academic interests focus on regional security, geopolitical developments, and strategic relations within the Asian region.",
    image: hillar
  },
  {
    name: "Dr. R. SRINIVASAN",
    role: "Group Captain",
    desc: "Dr. R. Srinivasan is a distinguished former officer of the Indian Air Force, strategic affairs researcher, and academic writer who served the nation for 33 years before retiring in 2018 with the rank of Group Captain. During his service career, he contributed extensively to defence administration and national security–related activities and was awarded the prestigious Visisht Seva Medal (VSM) by the President of India in 2012 for distinguished service of a high order. Academically accomplished, he holds degrees in MSW and LLB, along with a Postgraduate Diploma in International Humanitarian Law, and earned his Ph.D. in Political Sociology from Pondicherry University. Following his retirement, he has continued his engagement in strategic and social research as an Independent Researcher and currently serves as the Editor-in-Chief of the Electronic Journal of Social and Strategic Studies. Dr. Srinivasan is an internationally published and SCOPUS-indexed author with numerous book chapters and conference papers focusing on governance, regionalism, political economy, human rights, and strategic affairs. He is also a Senior Fellow at Defense Research and Studies (DRaS), a think tank dedicated to defence and strategic analysis, and regularly contributes articles and research papers to organizations such as Chennai Centre for China Studies and Kalinga International Foundation. Through his writings, lectures, and policy-oriented research, he continues to contribute significantly to discussions on international relations, security studies, governance, and regional strategic developments.",
    image: srinivasan
  },
  {
    name: "SANTOSH NAMBY CHANDRAN",
    role: "IG cum Principal Chief Security Commissioner",
    desc: "Mr. Santosh Namby Chandran is a senior Indian Railway Protection Force Service (IRPFS) officer from the 1998 batch of UPSC recruits. Born on 14 March 1972 in Bangalore, Karnataka, he holds an MS in Ecology and a PGDBA in Finance. He has served in several key security and administrative roles in Indian Railways, including DIG-cum-Chief Security Commissioner of Southern Railway, and later as Inspector General-cum-Principal Chief Security Commissioner. During his career, he received the Indian Police Medal for Meritorious Service and multiple departmental commendations for his contributions to railway security, leadership, and public service.",
    image: santosh
  },
  {
    name: "MR. D. THIRUMARAN",
    role: "Assistant Professor and Head",
    desc: "Prof. D. Thirumaran is an academician and researcher serving as Assistant Professor and Head of the PG and Research Department of Defence and Strategic Studies at Voorhees College. With more than two decades of teaching experience, he has made significant contributions to the field of defence and strategic studies through teaching, research, academic administration, and scholarly publications. He earned his M.A. in Defence Studies as a Gold Medalist, completed an M.Phil in Defence Studies, and also holds an M.A. in Political Science. Prof. Thirumaran has actively served on various academic and curriculum development boards and has authored and edited several books related to defence, security, and political studies. Recognized for his dedication to education and public service, he has received several honours, including the “Covid Warrior” Award and the “Best Educationist Award.” He has also participated extensively in national seminars, conferences, and workshops as a resource person, contributing to discussions on national security, strategic affairs, and contemporary geopolitical issues. ",
    image: thirumaran
  },
  {
    name: "DR. O. NIRMALA",
    role: "Assistant Professor and Head",
    desc: "Dr. O. Nirmala, M.A., Ph.D., serves as the Assistant Professor and Head of the Department of Defence and Strategic Studies and Dean, School of Humanities at Guru Nanak College. She completed her Ph.D. from University of Madras on the strategic significance of the Indian Ocean in India’s energy security and qualified UGC-NET/JRF in 2009. Her academic expertise includes maritime security, environmental security, artificial intelligence in defence, and strategic studies. She has published research papers and book chapters in reputed journals and conference proceedings and actively participates as a resource person and presenter at national and international academic conferences and workshops.",
    image: nirmala
  },
  {
    name: "Dr. Tafsir Matin Johansson",
    role: "Associate Professor",
    desc: "Dr. Tafsir Matin Johansson is an Associate Professor in Ocean Sustainability, Governance, and Management at the World Maritime University–Sasakawa Global Ocean Institute, Sweden. He specializes in ocean governance, maritime law, artificial intelligence, marine technology, and sustainable maritime policy.\nDr. Johansson holds a Ph.D. in Maritime Affairs from WMU and an LL.M. in Maritime Law from Lund University. His research focuses on Arctic governance, maritime decarbonization, marine pollution, climate resilience, fisheries governance, and autonomous ocean systems.\nHe has led and contributed to several international research projects funded by organizations including Transport Canada, the European Union, and the Lloyd’s Register Foundation. Dr. Johansson also serves as a guest lecturer, editorial board member of Ocean Development and International Law, and an active contributor to global discussions on sustainable and technology-driven ocean governance.",
    image: tafsir
  }
];

export default function Team() {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden pb-24">
      <PageBanner
        title="Our Team"
        imageSrc={ourteam}
      />

      <div className="container max-w-6xl mx-auto relative z-10 pt-16 px-4">
        <SectionTitle title="Governing Council" subtitle="Leadership" align="center" />

        <div className="grid grid-cols-1 gap-12 mt-12 mb-24">
          {governingCouncil.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Image Provision */}
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-100 group">
                <img
                  src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f4c75&color=fff&size=256`}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-[#0f4c75] mb-2">{member.name}</h3>
                <div className="inline-block px-4 py-1.5 bg-[#238dbb]/10 text-[#238dbb] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-100">
                  {member.role}
                </div>

                {member.desc && (
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-justify">
                    {member.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <SectionTitle title="Advisory Council" subtitle="Guidance" align="center" />

        <div className="grid grid-cols-1 gap-12 mt-12">
          {advisoryCouncil.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Image Provision */}
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-100 group">
                <img
                  src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f4c75&color=fff&size=256`}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-[#0f4c75] mb-2">{member.name}</h3>
                <div className="inline-block px-4 py-1.5 bg-[#0f4c75]/10 text-[#0f4c75] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-100">
                  {member.role}
                </div>

                {member.desc && (
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-justify">
                    {member.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
