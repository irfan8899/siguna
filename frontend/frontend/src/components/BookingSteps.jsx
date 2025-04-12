import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMapPin, FiCalendar, FiFileText, FiCheckCircle } from "react-icons/fi";

const BookingSteps = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      icon: <FiMapPin size={40} />,
      title: "1. Pilih Gedung",
      desc: "Telusuri daftar gedung dan pilih sesuai kebutuhan acara Anda.",
    },
    {
      icon: <FiCalendar size={40} />,
      title: "2. Cek Ketersediaan",
      desc: "Lihat tanggal yang tersedia dan pastikan jadwal sesuai.",
    },
    {
      icon: <FiFileText size={40} />,
      title: "3. Lakukan Pemesanan",
      desc: "Isi formulir dan konfirmasi pemesanan secara online.",
    },
    {
      icon: <FiCheckCircle size={40} />,
      title: "4. Selesai!",
      desc: "Tim kami akan menghubungi Anda untuk proses selanjutnya.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5 text-dark">Cara Pemesanan Gedung</h2>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div
              className="col-12 col-sm-6 col-md-3 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="h-100 p-4 rounded-4 shadow-sm bg-white"
                style={{
                  borderBottom: "4px solid #00b0f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                <div className="mb-3" style={{ color: "#00b0f0" }}>
                  {step.icon}
                </div>
                <h5 className="fw-bold text-dark mb-2">{step.title}</h5>
                <p className="text-muted small">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
