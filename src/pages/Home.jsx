import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import Faq from '../ui/Faq';
import HowItWorks from '../ui/HowItWorks';
import Mission from '../ui/Mission';
import HeroSec from '../ui/HeroSec';
import KeyFeatures from '../ui/KeyFeatures';
import ContactUs from '../ui/ContactUs';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home"><HeroSec /></div>
      <div id="keyf"><KeyFeatures /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="mission"><Mission /></div>
      <div id="faq"><Faq /></div>
      <div id="contact"><ContactUs /></div>
      <Footer />
    </>
  );
}

export default Home;
