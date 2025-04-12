import React from "react";
import promoImage from "../assets/promo.webp";
import "bootstrap/dist/css/bootstrap.min.css";

const Promo = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={promoImage}
            alt="Promo Gedung"
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: "cover", maxHeight: "350px", width: "100%" }}
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-3">Promo Spesial Bulan Ini</h2>
          <p className="text-muted mb-4">
            Nikmati diskon hingga <strong>30%</strong> untuk pemesanan gedung selama bulan ini. Kesempatan terbatas, jangan sampai kelewatan!
          </p>
          <a
            href="/promo"
            className="btn btn-lg fw-semibold"
            style={{
              backgroundColor: "#00b0f0",
              color: "#fff",
              borderRadius: "50px",
              padding: "10px 30px",
            }}
          >
            Cek Promo Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promo;
