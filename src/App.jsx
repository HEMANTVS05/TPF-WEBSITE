import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Events from './components/Events';
import Library from './components/Library';
import Blogs from './components/Blogs';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GenericPage from './components/GenericPage';
import Gallery from './components/Gallery';
import WorkshopDetails from './components/WorkshopDetails';
import WebinarDetails from './components/WebinarDetails';
import Team from './components/Team';
import Donate from './components/Donate';
import SocialSidebar from './components/SocialSidebar';
import './index.css';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// A layout component to wrap all pages
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <SocialSidebar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Landing page bundles Hero and About Us
const LandingPage = () => (
  <>
    <Hero />
    <About />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
        <Route path="/research/:topic" element={<PageTransition><GenericPage /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/events/workshops/:id" element={<PageTransition><WorkshopDetails /></PageTransition>} />
        <Route path="/events/webinars/:id" element={<PageTransition><WebinarDetails /></PageTransition>} />
        <Route path="/events/:topic" element={<PageTransition><GenericPage /></PageTransition>} />
        <Route path="/library" element={<PageTransition><Library /></PageTransition>} />
        <Route path="/library/:topic" element={<PageTransition><GenericPage /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/blogs/:topic" element={<PageTransition><GenericPage /></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="/career/:topic" element={<PageTransition><GenericPage /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <SmoothScroll>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </SmoothScroll>
  );
}

export default App;
