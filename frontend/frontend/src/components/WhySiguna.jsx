import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhySiguna = () => {
  const items = [
    {
      icon: "bi-building-fill",
      title: "Banyak Pilihan Gedung",
      desc: "Beragam pilihan gedung dari berbagai lokasi strategis yang siap dipilih sesuai kebutuhanmu.",
      color: "#00b0f0",
    },
    {
      icon: "bi-cash-stack",
      title: "Harga Terbaik & Transparan",
      desc: "Nikmati harga terbaik tanpa biaya tersembunyi. Ada juga promo menarik setiap bulan!",
      color: "#28a745",
    },
    {
      icon: "bi-lightning-charge-fill",
      title: "Proses Cepat & Mudah",
      desc: "Pesan gedung hanya dalam beberapa klik. Praktis, cepat, dan tanpa ribet.",
      color: "#ff9800",
    },
  ];

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(to bottom, #f0f9ff, #ffffff)",
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#333" }}>
          Kenapa Harus <span style={{ color: "#00b0f0" }}>SIGUNA?</span>
        </h2>
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-md-4 mb-4 d-flex"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card shadow-sm border-0 w-100 text-center p-4"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: item.color,
                    color: "#fff",
                    fontSize: "30px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-2" style={{ color: "#222" }}>
                  {item.title}
                </h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySiguna;
