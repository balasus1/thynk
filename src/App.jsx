import React from 'react'
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import Workflow from './components/Workflow.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
