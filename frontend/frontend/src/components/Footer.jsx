import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-light py-5"
      style={{ backgroundColor: "#002d55", marginTop: "60px" }}
    >
      <div className="container">
        <div className="row">
          {/* Kolom 1 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">SIGUNA</h5>
            <p>
              Solusi pemesanan gedung terpercaya untuk segala kebutuhan acara
              Anda. Mudah, cepat, dan aman!
            </p>
          </div>

          {/* Kolom 2 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Navigasi</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Beranda</a></li>
              <li><a href="/promo" className="text-light text-decoration-none">Promo</a></li>
              <li><a href="/booking" className="text-light text-decoration-none">Pesan Gedung</a></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Kontak Kami</h5>
            <p>Email: siguna.support@gmail.com</p>
            <p>WhatsApp: +62 819-2726-6054</p>
            <p>Alamat: Jl. Sukarame No. 123, Bandar Lampung</p>

            {/* Google Maps */}
            <div className="mt-3 rounded" style={{ overflow: "hidden", borderRadius: "12px" }}>
              <iframe
                title="Lokasi SIGUNA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9421744575697!2d105.2880463!3d-5.3971457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c4cc6e50b63d%3A0x398fbe0a5b672c6f!2sSukarame%2C%20Kota%20Bandar%20Lampung!5e0!3m2!1sid!2sid!4v1712810912345!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Ikon Media Sosial */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bawah */}
        <hr style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
        <p className="text-center mt-3 mb-0">&copy; 2025 SIGUNA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
