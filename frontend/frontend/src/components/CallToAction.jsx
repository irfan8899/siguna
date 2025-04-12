import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CallToAction = () => {
  return (
    <section
      className="text-white py-5 position-relative"
      style={{
        background: "linear-gradient(135deg, #4ea8de, #0078d7)",
        overflow: "hidden",
      }}
    >
      {/* Motif Titik-Titik */}
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Motif Kotak Grid */}
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23ffffff' stroke-opacity='0.04' stroke-width='0.5'%3E%3Cpath d='M0 0H20V20H0z' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Kolom Tulisan */}
          <div className="col-md-6 mb-5 mb-md-0 text-center text-md-start">
            <h2 className="fw-bold display-5 mb-3">Sewa Gedung Tanpa Ribet</h2>
            <p className="lead mb-4">
              Temukan tempat terbaik dan booking dengan cepat & mudah.
            </p>
            <a
              href="/booking"
              className="btn btn-light btn-lg fw-semibold px-5 py-3 shadow-sm"
              style={{
                borderRadius: "40px",
                color: "#0078d7",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f1f1";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Mulai Pemesanan
            </a>
          </div>

          {/* Kolom Gambar Gedung Kotak */}
<div className="col-md-6">
  <div className="row g-3 justify-content-center">
    {[1, 2, 3, 4, 5].map((num, index) => (
      <div
        className="col-4"
        key={num}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="rounded-4 overflow-hidden shadow"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: "#fff",
            transition: "transform 0.3s ease",
          }}
        >
          <img
            src={`/assets/images/gedung${num}.jpg`}
            alt={`Gedung ${num}`}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
