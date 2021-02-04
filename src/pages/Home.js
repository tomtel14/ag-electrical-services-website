import React, { useState, useEffect } from 'react';
import HeroSection from '../components/hero-section/HeroSection';
import ServiceCards from '../components/service-cards/ServicesCards';
import Banner from '../components/banner/Banner';
import ProjectCards from '../components/project-cards/ProjectCards';
import ReviewsSection from '../components/reviews-section/ReviewsSection';
import ContactSection from '../components/contact-section/ContactSection';

function Home() {

  const [desktopMode, setDesktopMode] = useState(false);

  const showReviewSection = () => {
    if (window.innerWidth >= 960) {
      setDesktopMode(true)
    } else {
      setDesktopMode(false)
    }
  };

  useEffect(() => {
    showReviewSection();
    window.addEventListener('resize', showReviewSection)

    return () => {
      window.removeEventListener('resize', showReviewSection)
    }
  }, [])

  return (
    <>
      <HeroSection />
      <ServiceCards />
      <Banner />
      <ProjectCards />
      {desktopMode ? <ReviewsSection isHomePage={true} /> : null}
      <ContactSection isHomePage={true} />
    </>
  );
}

export default Home;
