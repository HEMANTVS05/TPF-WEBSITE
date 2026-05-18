import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBanner from './PageBanner';
import coastalcommunity from '../assets/coastal_community.jpeg';
import maritimeLaw from '../assets/maritime_law.jpeg';
import nonTraditionalsecurity from '../assets/non-traditional_sec.jpeg'
import coastalmaritime from '../assets/coastal&maritime.jpeg'
import sdg from '../assets/sdgs.jpeg';
import img2 from '../assets/IMG_2.jpeg';
import workshop from '../assets/workshop.jpeg';
import img7 from '../assets/IMG_7.jpeg';
import img12 from '../assets/IMG_12.jpeg';
import communityOutreach from '../assets/community_outreach.jpeg';
import seminarweb from '../assets/seminarweb.jpeg';
import conference from '../assets/conference.jpeg';
import internship from '../assets/internship.jpeg';
import volunteers from '../assets/volunteers.jpeg';
import { Link } from 'react-router-dom';
import poster1 from '../assets/poster_1.jpeg';
import poster2 from '../assets/workshop_poster_2.jpg';
import poster3 from '../assets/workshop_poster_3.png';
import webinarPoster1 from '../assets/webinar_poster_1.jpg';
import webinarPoster2 from '../assets/webinar_poster_2.jpg';
import InteractiveCalendar from './InteractiveCalendar';

// Webinar cards data for the /events/seminars-webinars route
const webinarCardsData = [
  {
    id: '1',
    title: 'Impact of Fishermen Conflict',
    date: 'Sep 20, 2025',
    time: '2:00 PM',
    venue: 'Online Meet',
    poster: webinarPoster1
  },
  {
    id: '2',
    title: 'Coastal Security Threats',
    date: 'Oct 26, 2025',
    time: '10:30 AM',
    venue: 'Online Meet',
    poster: webinarPoster2
  }
];

// Workshop cards data for the /events/workshops route
const workshopCardsData = [
  {
    id: '1',
    title: 'Newswriting and Designing',
    date: 'Aug 11, 2025',
    time: '10:00 AM',
    venue: 'University of Madras, Chennai',
    poster: poster1
  },
  {
    id: '2',
    title: 'Maritime Security Domain',
    date: 'Mar 13, 2026',
    time: '2:00 PM',
    venue: 'Voorhees College, Vellore',
    poster: poster2
  },
  {
    id: '3',
    title: 'Basic Research and Design',
    date: 'Feb 16, 2026',
    time: '10:00 AM',
    venue: 'Maruthupandiyar College',
    poster: poster3
  }
];

// Custom content dictionary for the specific research subtopics
const customContentData = {
  '/research/coastal-community': {
    title: "Coastal Community",
    content: "India's 11,098.81-kilometer coastline is home to millions of people whose lives, livelihoods, and cultural identities are deeply intertwined with the sea. At C.A.R.c.E., our research on coastal communities encompasses a broad spectrum of sub-themes from coastal heritage and tourism to maritime industry and trade recognising that the resilience of these communities depends on a holistic understanding of their social, economic, and cultural fabric. We conduct in-depth studies on the heritage and cultural records, survival strategies, and local governance structures of diverse coastal societies across India while also exploring conflict resolution mechanisms and intercommunity dynamics. Our work goes beyond documentation; through grassroots volunteerism, night schools, health camps, and outreach initiatives, we actively engage with coastal populations to bridge knowledge gaps and foster empowerment. By connecting academic research with community-driven action, C.A.R.c.E. seeks to build resilient, vibrant, and self-sustaining coastal societies that honor their maritime roots while embracing the opportunities of the future.",
    image: coastalcommunity
  },
  '/research/maritime-law': {
    title: "Maritime Law",
    content: "A sound legal framework is the cornerstone of order, safety, and justice at sea. C.A.R.c.E.'s research in maritime law explores the complex intersection of international and domestic legal regimes governing India's vast maritime domain, including laws of the sea, human rights law, and the rights and obligations of coastal states. A central focus of our work is assessing the level of awareness about these international legal frameworks among coastal communities fisherfolk, port workers, and maritime traders and evaluating how these laws tangibly impact their daily lives and livelihoods. Through seminars, lectures, and community outreach campaigns, we work to demystify legal instruments such as UNCLOS and translate complex legal provisions into accessible knowledge for grassroots stakeholders. By advocating for policy reforms grounded in rigorous research, C.A.R.c.E. aims to ensure that maritime law serves not merely as a tool of governance but as a shield that protects the rights and dignity of every individual connected to India's coastline.",
    image: maritimeLaw
  },
  '/research/security': {
    title: "Non-Traditional Security Threats",
    content: "The maritime domain faces a growing and evolving array of non-traditional security threats that challenge the safety of coastal communities, the integrity of national borders, and the stability of regional geopolitics. C.A.R.c.E. recognises that threats such as Illegal, Unreported, and Unregulated (IUU) fishing, maritime terrorism, piracy, trafficking and smuggling of arms, drugs, and human beings, and unresolved border disputes represent multidimensional challenges that demand nuanced, research-driven responses. Our think tank undertakes comprehensive studies on these threats, analysing their root causes, regional patterns, and impacts on coastal populations, maritime trade, and national security. By brainstorming on matters of public policy pertaining to coastal security and engaging with youth researchers, security professionals, and policymakers, C.A.R.c.E. strives to generate actionable intelligence and policy recommendations that strengthen India's coastal defence architecture. As a 'think-and-do tank,' we are committed to transforming research findings into real-world initiatives that enhance maritime safety and protect vulnerable coastal communities from the far-reaching consequences of these threats.",
    image: nonTraditionalsecurity
  },
  '/research/ecosystem': {
    title: "Coastal & Marine Ecosystem",
    content: "India's coastal and marine ecosystems, encompassing mangroves, coral reefs, estuaries, seagrass beds, and rich biodiversity, are not only ecological treasures but also the very lifelines upon which millions of coastal communities depend. C.A.R.c.E.'s research in this domain addresses the pressing challenges of climate change, land-to-sea and sea-to-land pollution, disaster relief management, and the delineation and protection of maritime zones and boundaries. We believe that environmental degradation and community vulnerability are deeply interconnected, and our studies seek to illuminate these linkages through rigorous, science-based inquiry. Through awareness campaigns, knowledge transfer programs, and collaboration with local communities reliant on marine resources, we advocate for the conservation and responsible stewardship of India's coastal and marine environment. Anchored in science and inspired by policy, C.A.R.c.E. works to ensure that ecological sustainability and community well-being are treated not as competing priorities but as mutually reinforcing imperatives in the governance of India's maritime spaces.",
    image: coastalmaritime
  },
  '/research/sdg': {
    title: "SDG's",
    content: "The United Nations' 2030 Agenda for Sustainable Development provides a universal framework that resonates profoundly with C.A.R.c.E.'s mission to empower coastal communities and champion integrated maritime development. Our research engages with all 17 Sustainable Development Goals, recognising that the challenges and opportunities facing India's coastline from poverty and food security to climate action, quality education, gender equality, and partnerships for sustainable development are deeply reflected across the SDG framework. We approach the SDGs not as abstract global targets but as practical roadmaps for transforming the lives of coastal populations, guiding our research, educational programs, and community initiatives toward measurable, inclusive, and lasting impact. By aligning our work with SDG frameworks, C.A.R.c.E. seeks to contribute to national and global conversations on sustainable maritime development, ensuring that India's coastal communities are active participants in and primary beneficiaries of the broader project of building a just, equitable, and sustainable world.",
    image: sdg
  },
  '/events/calendar': {
    title: "Calendar",
    content: `The C.A.R.c.E. Annual Event Calendar serves as a dynamic platform showcasing all our academic, policy, and community engagement initiatives scheduled throughout the year. It reflects our commitment to transparency, participation, and sustained engagement in the maritime and coastal sectors.
Our calendar features a wide range of activities from international conferences and academic seminars to webinars, health camps, and community outreach programs. Each event is carefully designed to advance our mission of fostering awareness, research, and action in the areas of coastal security, sustainable development, and maritime heritage preservation.
This interactive calendar allows students, researchers, policymakers, and volunteers to plan their participation in advance and stay informed about upcoming opportunities. By mapping all our activities on a single platform, we ensure that our network remains connected and proactive in contributing to coastal resilience and sustainable maritime practices.
Whether you are a young scholar seeking to present research, a professional interested in maritime law, or a community member eager to contribute to local initiatives, our event calendar opens the door to collaboration.
At C.A.R.c.E., we believe that impactful change is possible only when knowledge and action meet consistency and coordination. The annual calendar is more than a schedule; it is a reflection of our journey through research, innovation, and community service.
Stay tuned. Stay informed. Stay involved because every event brings us closer to a secure and sustainable maritime future.`,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    hasInteractiveCalendar: true
  },
  '/events/conference': {
    title: "Conference",
    content: `The C.A.R.c.E. Conference Series serves as a premier knowledge-sharing and networking platform, bringing together maritime experts, policymakers, youth leaders, academicians, and community representatives. These conferences aim to address contemporary challenges and opportunities in India’s vast maritime and coastal sectors, while promoting research-based solutions and informed policy dialogue.
Each conference is designed around pressing themes such as maritime security, coastal resilience, blue economy, heritage conservation, and the role of youth in maritime governance. Through keynote sessions, paper presentations, and expert panels, participants engage in multidimensional discussions that foster collaboration across sectors.
Our conferences go beyond traditional academic boundaries; they bridge policy research with field implementation. By hosting discussions on issues like Illegal, Unreported, and Unregulated (IUU) fishing, maritime terrorism; human trafficking; and climate adaptation, we ensure that our outcomes translate into actionable frameworks.
Participants gain not only insights but also opportunities to form strategic partnerships with stakeholders from academia, government, and civil society. The event concludes with a synthesis of recommendations and policy briefs, ensuring continuity in our mission to influence decision-making and coastal governance.
At C.A.R.c.E., conferences are more than forums of dialogue; they are incubators of innovation and instruments of transformation. By empowering young researchers and community advocates, we strive to build a future where informed minds lead resilient coasts.
Anchored in science, inspired by policy, and driven by people, our conferences define the pulse of India’s maritime progress.`,
    image: conference
  },
  '/events/seminars-webinars': {
    title: "Seminar and Webinar",
    content: `At C.A.R.c.E., our seminar and webinar series serve as dynamic platforms for intellectual exchange, collaborative learning, and actionable insights into India’s maritime and coastal landscape. Designed to connect academia, policy, and grassroots realities, these initiatives embody our commitment to fostering informed dialogue and youth-driven engagement across diverse maritime domains. Each seminar provides a focused space for in-depth discussions on crucial themes such as coastal community resilience, maritime law, environmental sustainability, cultural heritage, and non-traditional security challenges. By bringing together students, researchers, policymakers, and practitioners, our seminars encourage participants to critically examine case studies, legal frameworks, and real-world maritime challenges while developing innovative solutions that link research with societal impact.

Our webinars, meanwhile, extend this mission into the digital realm, breaking geographical barriers and creating an inclusive, virtual platform for nationwide participation. Covering subjects from climate change and ocean governance to marine pollution and blue economy strategies, these sessions make knowledge accessible to a global audience. Through interactive Q&A sessions, live polls, and panel discussions, participants engage directly with experts and community voices, ensuring that every dialogue is both educational and participatory. Together, our seminars and webinars create a continuous cycle of learning, reflection, and action, nurturing the next generation of maritime scholars and leaders. Each session concludes with key takeaways that contribute to our broader mission of integrating research, policy, and practice for the sustainable development of India’s coastal regions.
Through our seminar and webinar platforms, C.A.R.c.E. transforms ideas into impact, inspiring awareness, building capacity, and steering India’s maritime future toward sustainability and security.`,
    image: seminarweb,
    hasWebinarCards: true
  },
  '/events/workshops': {
    title: "Workshops",
    content: `At C.A.R.c.E., our workshop series is designed to bridge the gap between academic learning and real-world application. These workshops empower students, young researchers, and aspiring professionals from various colleges and universities to develop the essential skills needed for impactful work in the maritime and coastal domains. Each workshop offers an immersive, hands-on learning experience that focuses on research methodology, content writing, academic editing, news and article writing, policy drafting, and field documentation. Participants are guided through the entire process of transforming ideas into structured research outputs from conceptualisation and data collection to analysis and publication.
The sessions are facilitated by experienced mentors, maritime experts, and academicians who provide practical insights and real-world case studies. This approach ensures that participants not only acquire theoretical understanding but also learn to apply their knowledge to current issues such as coastal security, marine governance, heritage preservation, and environmental sustainability. Our workshops also emphasise the art of effective communication and critical writing, helping students build confidence in presenting their research findings and writing persuasive, evidence-based articles for academic and media platforms. Editing modules further enhance participants’ ability to refine their work to meet professional standards.
Beyond technical skills, these workshops nurture collaboration and interdisciplinary thinking. Participants engage in group discussions, brainstorming sessions, and project-based learning, encouraging teamwork and leadership. By the end of each program, students gain a comprehensive skill set and a clearer vision of how they can contribute to India’s maritime sector through informed research, creative writing, and policy-oriented analysis.
C.A.R.c.E. Workshops are more than learning sessions they are incubators for youth-driven ideas, shaping capable thinkers and doers who will navigate India’s maritime future.`,
    image: workshop,
    hasWorkshopCards: true
  },
  '/events/outreach': {
    title: "Community Outreach",
    content: `At C.A.R.c.E., we believe that knowledge must translate into tangible action. Our Community and Outreach Events reflect our deep commitment to the well-being of India’s coastal communities and marine ecosystems. Through hands-on initiatives like Beach Clean-Ups, Medical Camps, Awareness Drives, and Night Schools, we bring our research and humanitarian values to life.

<h3 className="text-2xl font-bold">🏖️ Beach Clean-Ups</h3>
Our beach clean-up campaigns mobilise youth volunteers and local communities to preserve coastal ecosystems. Beyond removing waste, these initiatives raise awareness about pollution, ocean health, and the importance of sustainable waste management practices. Each clean-up is a call to protect our natural heritage and inspire civic responsibility.

<h3 className="text-2xl font-bold">⚕️ Medical Camps</h3>
Health is a cornerstone of community resilience. Our medical camps provide essential healthcare access to remote fishing and coastal populations. In collaboration with local health professionals, we offer medical check-ups, hygiene awareness, and health education, ensuring that maritime development includes human well-being.

<h3 className="text-2xl font-bold">📚 Educational & Awareness Drives </h3>
Through night schools, literacy programs, and awareness lectures, we empower children and adults with education and knowledge. Our campaigns highlight themes like marine resource conservation, legal rights, and disaster preparedness ensuring communities are informed, resilient, and self-reliant.

Each of these outreach initiatives demonstrates our holistic approach combining science, policy, and compassion to build sustainable coastal futures.
Every community program is an act of service, every volunteer an agent of change together, we are shaping a stronger, healthier, and cleaner maritime India.`,
    image: communityOutreach
  },
  '/library/publication': {
    title: "Publication",
    content: `The Publication Section of the C.A.R.c.E. Library features a curated collection of research-driven works, policy briefs, and thematic papers that delve into critical maritime and coastal issues. Each publication is the outcome of rigorous study and collaborative effort, reflecting our organisation's dual focus on scholarly excellence and grassroots relevance.
Our publications address key themes such as maritime security, international law, non-traditional threats, blue economy strategies, and the socio-economic well-being of coastal communities. These resources provide valuable insights into issues like IUU (Illegal, Unreported, and Unregulated) fishing, maritime terrorism, trafficking, coastal resilience, and climate adaptation.
Developed through partnerships with research institutions, maritime professionals, and youth fellows, these publications aim to foster a well-informed maritime community that can contribute meaningfully to policy formulation and sustainable practices.
At C.A.R.c.E., we view every publication as a tool for advocacy and education transforming complex data into accessible knowledge that empowers stakeholders at all levels. Each document is meticulously reviewed, ensuring accuracy, integrity, and clarity of information. Our goal is to make maritime research widely available, inspiring new studies, collaborative innovation, and informed decision-making.
Explore our publications where data, dialogue, and discovery shape India's maritime destiny.`,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
  },
  '/library/articles': {
    title: "Articles",
    content: `The Articles Section of the C.A.R.c.E. Library offers an engaging collection of short-form insights, reflections, and opinion pieces written by researchers, scholars, youth leaders, and community practitioners. Each article captures emerging trends, local perspectives, and innovative ideas in maritime studies, designed to spark curiosity and encourage dialogue.We cover diverse subjects such as coastal community resilience, maritime law, marine biodiversity, heritage conservation, sustainable tourism, and disaster management. Our articles often document ground-level experiences from our field programs and highlight the voices of coastal citizens, ensuring inclusivity in maritime discourse. C.A.R.c.E. encourages youth contributions through this platform, providing space for young scholars to express their research findings, analyses, and ideas. By amplifying youth-led thought, we aim to inspire academic curiosity and civic responsibility toward coastal development. The articles section acts as a bridge between research and the public sphere. It transforms academic topics into accessible narratives, helping readers understand how maritime issues impact everyday lives from livelihoods to national security. Regularly updated, this section remains an evolving journal of maritime thought leadership, fostering a culture of informed participation and active problem-solving.
Our articles bring research to life, connecting the tide of ideas with the power of action.`,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
  },
  '/library/magazines': {
    title: "Monthly Magazine",
    content: `The C.A.R.c.E. Monthly Magazine is the organisation's flagship publication, a dynamic platform that captures the rhythm of India's maritime life, its challenges, opportunities, and innovations. Each issue showcases a blend of research highlights, policy insights, community stories, and youth perspectives.
This magazine reflects our belief that knowledge should travel beyond academic halls into classrooms, fishing villages, policy tables, and every space where change begins. With each edition, we document the voices of coastal citizens, marine professionals, scholars, and volunteers who are shaping the maritime future of India.
Regular features include field reports, interviews, expert columns, youth essays, and environmental updates. Topics range from marine conservation and security strategies to sustainable livelihoods and cultural heritage.
Designed to inform and inspire, the C.A.R.c.E. magazine serves as a creative intersection between research and storytelling. It provides readers with an engaging yet informative look at how science, governance, and community intersect along India's vast coastline. By celebrating youth-led initiatives and community resilience, each issue reinforces our mission to connect knowledge with empathy and research with real-world transformation.
Every issue is a voyage navigating the currents of change across India's maritime horizon.`,
    image: "https://images.unsplash.com/photo-1535954741680-a2e24eb05418?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  '/library/reports': {
    title: "Research Reports",
    content: `The Research Reports Section is the cornerstone of C.A.R.c.E evidence-based approach to maritime and coastal development. These comprehensive reports document our in-depth studies, surveys, and analyses, providing reliable insights into key issues that influence India's maritime landscape.
Our research reports cover a wide spectrum of focus areas maritime law and governance, non-traditional security threats, marine ecology, pollution management, disaster resilience, and the socio-economic conditions of coastal communities. Each study is conducted with academic precision and field-based validation, ensuring relevance and accuracy.
These reports not only present findings but also propose actionable recommendations for policymakers, development organisations, and coastal stakeholders. They form the foundation of our advocacy efforts, guiding national conversations and supporting evidence-driven policy interventions.
C.A.R.c.E. also emphasises youth involvement in research, offering opportunities for young scholars to participate in field projects and contribute to published studies. This hands-on engagement fosters a new generation of maritime researchers and leaders.
Every report represents more than data; it represents our commitment to transforming research into real-world solutions that protect coastlines, empower communities, and promote sustainable progress.
Our research reports chart the course toward informed policy, resilient communities, and a sustainable maritime future.`,
    image: "https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  '/blogs/documentary': {
    title: "Documentary",
    content: `The documentary section brings maritime realities to life through powerful visual storytelling. Each C.A.R.c.E. documentary explores critical themes such as coastal community resilience, marine biodiversity, maritime security, and cultural heritage showcasing both challenges and triumphs from India’s coastline. These documentaries are grounded in rigorous research and fieldwork, blending academic insight with emotional resonance. They serve as visual narratives that amplify the voices of coastal citizens, fishermen, women entrepreneurs, scientists, and policymakers working to protect and develop India’s maritime frontiers.
Our films not only inform but also inspire. Whether highlighting the impact of climate change on coastal villages, exposing issues like illegal fishing or marine pollution, or celebrating traditional sea-based livelihoods, each documentary reflects our “think-and-do” philosophy combining knowledge with action. Created in collaboration with young filmmakers, researchers, and local communities, our documentaries also serve as educational resources for universities, NGOs, and training institutions. Through cinematic storytelling, we aim to make maritime research accessible, relatable, and transformative.
Every frame tells a story of the sea of resilience, innovation, and hope along India’s 11,098.81 km coastline.`,
    image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147486350/images/7cda74c-fd18-e66e-5f1f-3af0e852dc26_Sebastian_Solberg_v18.jpg",
    hasYouTubeVideo: "QeBIuY5uzCs"
  },
  '/blogs/newsletter': {
    title: "Newsletter",
    content: `The Newsletter Section is C.A.R.c.E ongoing chronicle of maritime developments, presenting updates, expert columns, and field stories that capture the evolving dynamics of India’s coastal landscape. It functions as both a current affairs portal and a knowledge-sharing platform, ensuring that our audience stays informed about key events and policies in the maritime world. Our coverage includes topics such as maritime security, ocean governance, blue economy initiatives, climate adaptation, and community-led sustainability programs. Through concise, research-backed articles, we connect global maritime trends with India’s local realities.
Each post is carefully curated to combine factual accuracy with accessible language, making it valuable for students, policymakers, and the public. We also feature youth correspondents and researchers who contribute first-hand perspectives from field studies, workshops, and community initiatives. This section transforms complex maritime discussions into engaging journalism, reinforcing our mission to promote awareness and civic participation in coastal affairs. At C.A.R.c.E., we view every news piece as an opportunity to educate, inform, and inspire collective responsibility for the seas that sustain us.
Our newspaper stories sail beyond headlines they document the living pulse of India’s maritime world.`,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  },
  '/blogs/podcast': {
    title: "Podcast",
    content: `The C.A.R.c.E. Podcast Series offers an immersive audio experience that dives deep into maritime conversations. Through candid dialogues, interviews, and storytelling, our podcasts connect listeners to the people, policies, and projects shaping India’s coastal and oceanic future.
Each episode features experts, youth leaders, and coastal community representatives discussing pressing maritime issues such as ocean conservation, maritime law, blue economy growth, security challenges, and traditional knowledge systems. Designed for accessibility, our podcasts bring maritime awareness to listeners across all backgrounds, from students and researchers to coastal citizens and policymakers. Episodes are available in multiple formats, ensuring inclusivity and reach.
Our podcast is more than information; it is a movement to humanise maritime research, making it relatable, conversational, and inspiring. The relaxed, discussion-based format allows experts and youth alike to explore ideas and share experiences that go beyond conventional learning. By amplifying coastal voices and youth insights, the C.A.R.c.E. Podcast Series transforms complex maritime topics into stories of human courage, innovation, and hope.
Tune in where every conversation connects the coast, the community, and the country.`,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop"
  },
  '/blogs/data-collection': {
    title: "Data Collection",
    content: `The Data Collecting Section highlights C.A.R.c.E commitment to evidence-based research and informed policy advocacy. Data is at the heart of our work shaping how we understand, interpret, and act on the challenges facing India’s maritime and coastal sectors.
Our data initiatives focus on areas such as marine pollution monitoring, socio-economic mapping of coastal communities, IUU (Illegal, Unreported, and Unregulated) fishing patterns, maritime law awareness, disaster resilience, and climate vulnerability assessment.
Through collaborative field studies and technology-enabled surveys, we collect, analyse, and visualise data that reflects real-world coastal dynamics. This information supports not only our internal research but also guides policymakers, NGOs, and academic institutions in developing sustainable solutions.
C.A.R.c.E. ensures transparency and accessibility by converting raw data into simplified infographics, dashboards, and reports empowering the public to make informed decisions and take action. By integrating scientific accuracy with community participation, our data projects embody our “think-and-do” approach, using facts to fuel transformation and evidence to inspire impact.
At C.A.R.c.E., data is more than numbers, it’s a story of the sea waiting to be told, studied, and safeguarded.`,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  '/career/volunteers': {
    title: "Volunteers",
    content: `Volunteering at C.A.R.c.E. is a chance to transform compassion into action. As a volunteer, you become part of a dynamic movement dedicated to empowering India’s coastal communities, preserving marine ecosystems, and fostering public awareness on maritime security and sustainability. Our volunteers play a crucial role in the success of our grassroots programs, from beach clean-ups, health camps, and night schools, to awareness campaigns on marine conservation, disaster preparedness, and legal literacy. Every volunteer effort directly supports local communities and contributes to the protection of India’s maritime heritage.
 
C.A.R.c.E. welcomes individuals from diverse backgrounds students, professionals, educators, and community leaders who are passionate about making a tangible difference. Volunteers gain hands-on experience in project coordination, community interaction, event organization, and social impact initiatives. Through participation, they also build a deeper understanding of how policy, research, and public action intertwine to shape sustainable coastal futures. We believe volunteering is not only service but also self-development. By joining our programs, volunteers enhance their leadership, teamwork, and problem-solving skills while being part of a supportive, youth-driven network of changemakers. Whether you can dedicate a few hours or a few months, your time and talent help us drive transformation along India’s 11,098.81 km coastline.
 
Be a volunteer with C.A.R.c.E., because every small act can make a tidal impact.`,
    image: volunteers,
    actionButton: {
      text: "Join our WhatsApp Group",
      url: "https://chat.whatsapp.com/BT05h94hidPLNL7B1RxpD5?mlu=2&s=cl&p=a",
      icon: "💬",
      color: "bg-[#25D366] hover:bg-[#1da851] text-white"
    }
  },
  '/career/internships': {
    title: "Internships",
    content: `The C.A.R.c.E. Internship Program is a unique opportunity for students and young professionals to immerse themselves in the fields of maritime security, law, governance, coastal development, and environmental sustainability. As a “think-and-do tank,” we believe that the most effective learning happens when research meets real-world implementation. Our internship provides structured mentorship under experienced professionals and scholars, allowing interns to engage in active research projects, field studies, policy drafting, community engagement programs, and awareness campaigns. Interns will gain exposure to interdisciplinary maritime themes such as IUU fishing, coastal heritage conservation, ocean governance, marine pollution, and blue economy innovation. We prioritise experiential learning encouraging interns to not only observe but also contribute meaningfully to our initiatives. Interns participate in workshops, coastal field visits, seminars, and documentation exercises, thereby building valuable skills in research writing, policy analysis, and sustainable project design. The internship is ideal for students pursuing degrees in law, international relations, environmental science, maritime studies, sociology, or development studies.
 
At the end of the program, each intern produces a publication or research brief that contributes to C.A.R.c.E knowledge repository. Certificates and recommendation letters are provided to those who demonstrate exceptional commitment and innovation.
 
Embark on your journey with C.A.R.c.E. where learning sails beyond classrooms, and every idea makes a wave of change.`,
    image: internship,
    actionButton: {
      text: "Apply Now for Internship",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSf0H4etrRCVBb8C0Oe6dG_AEIf73qp3ZdXZ2elton4EnpTdnA/viewform?usp=sharing&ouid=109014665665869315060",
      icon: "🎓",
      color: "bg-[#0f4c75] hover:bg-[#238dbb] text-white"
    }
  }
};

export default function GenericPage() {
  const location = useLocation();

  // Check if we have custom content for this specific route
  const customData = customContentData[location.pathname];

  // If we have custom content, render the dedicated layout
  if (customData) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <PageBanner
          title={customData.title}
          imageSrc={customData.image}
        />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(35,141,187,0.06)_0%,_transparent_70%)] rounded-full -translate-x-1/2 pointer-events-none z-0"></div>

        <div className="container max-w-5xl relative z-10 pt-16">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-[#238dbb]/10 text-[#0f4c75] rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            {location.pathname.includes('/research') ? 'Research Focus' :
              location.pathname.includes('/events') ? 'Events & Initiatives' :
                location.pathname.includes('/library') ? 'Library & Knowledge' :
                  location.pathname.includes('/blogs') ? 'Insights & Media' :
                    location.pathname.includes('/career') ? 'Careers & Opportunities' : 'Initiative'}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight">{customData.title}</h2>

          {/* Interactive Calendar Section */}
          {customData.hasInteractiveCalendar && (
            <div className="mb-12">
              <InteractiveCalendar />
            </div>
          )}

          {/* Landscape Static Image */}
          <div className="w-full mb-12 rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-white">
            <img src={customData.image} alt={customData.title} className="w-full h-auto md:max-h-[500px] object-cover" />
          </div>

          {/* Content Paragraphs */}
          <div className="prose prose-lg max-w-none text-gray-600">
            <div
              className="text-lg md:text-xl leading-[1.8] whitespace-pre-line text-justify"
              dangerouslySetInnerHTML={{ __html: customData.content }}
            />
          </div>

          {/* Action Button */}
          {customData.actionButton && (
            <div className="mt-12">
              <a
                href={customData.actionButton.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg !text-white ${customData.actionButton.color}`}
              >
                <span className="text-2xl">{customData.actionButton.icon}</span>
                {customData.actionButton.text}
              </a>
            </div>
          )}

          {/* YouTube Video Section */}
          {customData.hasYouTubeVideo && (
            <div className="mt-16 border-t border-gray-200 pt-16">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">Featured Documentary</h3>
              <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${customData.hasYouTubeVideo}?autoplay=0&rel=0`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Workshop Cards Section */}
          {customData.hasWorkshopCards && (
            <div className="mt-16 border-t border-gray-200 pt-16">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">Upcoming & Past Workshops</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {workshopCardsData.map((workshop) => (
                  <Link
                    to={`/events/workshops/${workshop.id}`}
                    key={workshop.id}
                    className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 block transform hover:-translate-y-2"
                  >
                    <div className="aspect-[2/3] relative overflow-hidden">
                      <img
                        src={workshop.poster}
                        alt={workshop.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                      {/* Hover Info */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-[#238dbb]/20 backdrop-blur-md border border-[#238dbb]/30 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                          Workshop
                        </span>
                        <h4 className="text-xl font-bold !text-white mb-4 drop-shadow-md leading-tight z-10 relative">
                          {workshop.title}
                        </h4>

                        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm font-medium text-gray-200">
                          <p className="flex items-center gap-2">
                            <span>📅</span> {workshop.date}
                          </p>
                          <p className="flex items-center gap-2">
                            <span>⏰</span> {workshop.time}
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="mt-1">📍</span>
                            <span className="leading-snug">{workshop.venue}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Webinar Cards Section */}
          {customData.hasWebinarCards && (
            <div className="mt-16 border-t border-gray-200 pt-16">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">Our Webinars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {webinarCardsData.map((webinar) => (
                  <Link
                    to={`/events/webinars/${webinar.id}`}
                    key={webinar.id}
                    className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 block"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={webinar.poster}
                        alt={webinar.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                      {/* Hover Info */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-[#238dbb]/20 backdrop-blur-md border border-[#238dbb]/30 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                          Webinar
                        </span>
                        <h4 className="text-xl font-bold !text-white mb-4 drop-shadow-md leading-tight z-10 relative">
                          {webinar.title}
                        </h4>

                        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm font-medium text-gray-200">
                          <p className="flex items-center gap-2">
                            <span>📅</span> {webinar.date}
                          </p>
                          <p className="flex items-center gap-2">
                            <span>⏰</span> {webinar.time}
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="mt-1">📍</span>
                            <span className="leading-snug">{webinar.venue}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // FALLBACK: Generic Under Construction Page for all other routes
  const pathParts = location.pathname.split('/');
  const rawTitle = pathParts[pathParts.length - 1].replace(/-/g, ' ');
  const title = rawTitle.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  let imageSrc = img2;
  if (location.pathname.includes('/events')) {
    imageSrc = img7;
  } else if (location.pathname.includes('/library')) {
    imageSrc = img12;
  } else if (location.pathname.includes('/career')) {
    imageSrc = img2;
  } else if (location.pathname.includes('/blogs')) {
    imageSrc = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop";
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <PageBanner
        title={title}
        imageSrc={imageSrc}
      />

      <div className="container relative z-10 pt-20 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-xl shadow-blue-900/5 max-w-3xl mx-auto border border-gray-100">
          <div className="text-6xl mb-6 opacity-80">🚧</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-6">{title}</h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            This section is currently under development. The complete content for {title} will be uploaded soon.
          </p>
          <div className="mt-10">
            <button className="btn-primary" onClick={() => window.history.back()}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
