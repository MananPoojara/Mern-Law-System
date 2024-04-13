import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceContent from "../components/ServiceContent";
import ServiceHero from "../components/ServiceHero";
import Table from "../components/Table";

const Service = () => {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <ServiceContent />
      <Footer />
    </>
  );
};

export default Service;
