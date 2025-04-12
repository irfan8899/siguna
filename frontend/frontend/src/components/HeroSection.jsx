import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <div
      className="hero d-flex align-items-center text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
          Selamat Datang di <span className="text-warning">SIGUNA</span>
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          Platform pemesanan gedung terbaik di . Mudah, Cepat, dan Terpercaya.
        </p>
        <a
          href="/booking"
          className="btn btn-warning btn-lg shadow-sm animate__animated animate__zoomIn"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
