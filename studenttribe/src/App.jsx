// App.js or Routes.js
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './index.css';
import IntroPage from './Student/StudentIntroPage';

// Pages
import AppPage from './pages/AppPage';
import Events from './pages/Events';
import Beast from './pages/Beast';
import Care from './pages/Care';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SplashScreen from './components/SplashScreen/SplashScreen';
import BrandsIntroPage from './Brands/BrandsIntroPage';
import StudentApp from './Student/StudentSchool';
import StudentLayout from './Student/StudentLayout';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Example: Auto-hide splash screen after 3 seconds
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
          <Routes>
            <Route path="/" element={<StudentLayout />} />
            <Route path="/school" element={<StudentApp />} />
            <Route path="/brands" element={<BrandsIntroPage />} />
            <Route path="/beast" element={<Beast />} />
            <Route path="/care" element={<Care />} />
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
