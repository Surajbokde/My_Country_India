import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Facts from '../Facts';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Facts />
      <Footer />
    </>
  );
}

export default Home;
