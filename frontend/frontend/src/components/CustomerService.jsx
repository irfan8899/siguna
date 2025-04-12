import React from "react";
import { FaComments, FaWhatsapp } from "react-icons/fa"; // Tambahkan FaWhatsapp

const ChatCS = () => {
  return (
    <div className="container my-5">
      <div
        className="rounded-5 shadow-lg p-4 d-flex flex-column flex-lg-row align-items-center position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #00b0f0 0%, #0078d7 100%)",
          color: "white",
          animation: "slideIn 0.8s ease-out",
        }}
      >
        {/* Sudut gradasi dekoratif */}
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            top: "-50px",
            right: "-50px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            bottom: "-50px",
            left: "-50px",
          }}
        />

        {/* Avatar Si Gugun */}
        <div className="mb-3 mb-lg-0 me-lg-4 text-center">
          <img
            src="/assets/images/gugun.png"
            alt="Si Gugun"
            className="shadow"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "30px",
              border: "3px solid white",
            }}
          />
        </div>

        {/* Teks & CTA */}
        <div className="text-center text-lg-start">
          <FaComments size={32} className="mb-2" />
          <h3 className="fw-bold">Ada Pertanyaan?</h3>
          <p className="mb-3 fs-5">
            Chat langsung dengan CS <strong>Si Gugun</strong> sekarang juga!
          </p>
          <a
            href="https://wa.me/6281927266054"
            className="btn btn-light fw-bold px-4 py-2 d-inline-flex align-items-center gap-2"
            style={{ borderRadius: "30px" }}
          >
            <FaWhatsapp size={20} color="#25D366" /> Chat Sekarang
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ChatCS;
