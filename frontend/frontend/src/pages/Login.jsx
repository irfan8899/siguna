// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleGoogleLogin = () => {
    alert("Login dengan Google belum dihubungkan.");
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="card border-0 shadow-lg p-4 w-100" style={{ maxWidth: "420px", borderRadius: "16px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Masuk</h2>
          <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
            Silakan login untuk memesan gedung dengan mudah.
          </p>
        </div>

        {/* Form login */}
        <form>
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
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 text-white rounded-3 mb-3"
            style={{
              backgroundColor: "#00b0f0",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0095cc")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#00b0f0")}
          >
            Masuk
          </button>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center mb-3 mt-2">
          <div className="flex-grow-1 border-top" />
          <span className="mx-2 text-muted small">atau</span>
          <div className="flex-grow-1 border-top" />
        </div>

        {/* Login dengan Google */}
        <button
          className="btn btn-light border d-flex align-items-center justify-content-center gap-2 w-100 rounded-3"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={20} />
          <span className="fw-medium">Masuk dengan Google</span>
        </button>

        {/* Link ke register */}
        <div className="text-center mt-4">
          <small className="text-muted">
            Belum punya akun?{" "}
            <Link to="/register" className="text-decoration-none">Daftar di sini</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
