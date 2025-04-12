// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = scrolling ? "black" : "white";
  const linkHoverColor = scrolling ? "#007bff" : "#cceeff";

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolling ? "shadow bg-white" : ""
      }`}
      style={{
        backgroundColor: scrolling ? "white" : "#00b0f0",
        transition: "0.3s ease-in-out",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: linkColor }}
        >
          SIGUNA
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {["Home", "Promo", "Lokasi Gedung", "Tentang kami"].map(
              (menu, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link fw-semibold"
                    to={`/${menu.toLowerCase().replace(/\s/g, "")}`}
                    style={{
                      color: linkColor,
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = linkHoverColor)
                    }
                    onMouseLeave={(e) => (e.target.style.color = linkColor)}
                  >
                    {menu}
                  </Link>
                </li>
              )
            )}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
                style={{ color: linkColor }}
              >
                <FaShoppingCart className="fs-5" />
              </Link>
            </li>
            <li className="nav-item my-2 my-lg-0">
              <Link
                className={`btn ms-lg-2 ${
                  scrolling ? "btn-outline-dark" : "btn-outline-light"
                }`}
                to="/login"
              >
                <FaUser className="me-1" /> Login
              </Link>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <Link
                className={`btn ms-lg-2 ${
                  scrolling ? "btn-dark text-white" : "btn-light text-primary"
                }`}
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
