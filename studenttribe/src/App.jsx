import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './index.css';

import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SplashScreen from './components/SplashScreen/SplashScreen';
import BrandsIntroPage from './Brands/BrandsIntroPage';
import StudentApp from "./Student/StudentApp"
import StudentLayout from "./Student/StudentLayout";
import StudentSchool from './Student/StudentSchool';
import StudentEvents from './Student/StudentEvents';
import StudentOpportunities from './Student/StudentOpportunities';
import StudentBeast from './Student/StudentBeast';
import StudentCare from './Student/StudentCare';
import WhoweAre from './Student/WhoWeAre';
import Header from './components/Header';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen onTransitionComplete={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<StudentLayout />} />
            <Route path="/school" element={<StudentSchool />} />
            <Route path="/app" element={<StudentApp />} />
            <Route path="/opportunities" element={<StudentOpportunities />} />
            <Route path="/events" element={<StudentEvents />} />
            <Route path="/beasts" element={<StudentBeast />} />
            <Route path="/care" element={<StudentCare />} />
            <Route path="/us" element={<WhoweAre />} />
            <Route path="/brands" element={<BrandsIntroPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
