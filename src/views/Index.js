import React, { useRef, useEffect } from "react";
import Navbar from '../components/Navbars/Navbar.js';
import Footer from '../components/Footers/Footer.js';
import Hero from "./IndexSections/Hero.js";
import Aboutus from "./IndexSections/AboutUs.js";
import Pricing from "./IndexSections/Pricing.js";
import Features from "./IndexSections/Features.js";
import Contact from "./IndexSections/Contact.js";
import Testimonial from "./IndexSections/Testimonial.js";
import Faqs from "./IndexSections/Faqs.js";

function Index() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }, []);

  return (
    <>
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Features />
        <Aboutus />
        <Pricing />
        <Testimonial />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Index;
