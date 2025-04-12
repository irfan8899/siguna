import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import BookingSteps from "../components/BookingSteps";
import Promo from "../components/Promo";
import GedungList from "../components/GedungList";
import WhySiguna from "../components/WhySiguna";
import TestimoniSlider from "../components/TestimoniSlider";
import CustomerService from "../components/CustomerService";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [gedung, setGedung] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/gedung")
      .then((response) => setGedung(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Call To Action */}
      <CallToAction />

      {/* Booking Steps */}
      <BookingSteps />

      {/* Promo */}
      <Promo />

      {/* Daftar Gedung */}
      <GedungList gedung={gedung} />

      <WhySiguna />

      <TestimoniSlider />

      <CustomerService />

      <Footer />
    </>
  );
};

export default Home;
