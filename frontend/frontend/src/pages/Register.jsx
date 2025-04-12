// src/pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="card border-0 shadow-lg p-4 w-100" style={{ maxWidth: "420px", borderRadius: "16px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Daftar Akun</h2>
          <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
            Buat akun untuk mulai memesan gedung dengan mudah.
          </p>
        </div>

        {/* Form Registrasi */}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nama Lengkap</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="name"
              placeholder="Contoh: Budi Santoso"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              id="email"
              placeholder="nama@email.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Kata Sandi</label>
            <input
              type="password"
              className="form-control rounded-3"
              id="password"
              placeholder="Minimal 6 karakter"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Konfirmasi Kata Sandi</label>
            <input
              type="password"
              className="form-control rounded-3"
              id="confirmPassword"
              placeholder="Ulangi kata sandi"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 text-white rounded-3"
            style={{
              backgroundColor: "#00b0f0",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0095cc")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#00b0f0")}
          >
            Daftar
          </button>
        </form>

        {/* Link ke login */}
        <div className="text-center mt-4">
          <small className="text-muted">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-decoration-none">Masuk di sini</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
