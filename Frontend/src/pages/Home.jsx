import React from "react";
import Analytics from "../components/Analytics";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeQuote from "../components/HomeQuote";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <HomeQuote />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
