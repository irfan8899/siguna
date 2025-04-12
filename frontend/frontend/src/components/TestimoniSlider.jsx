import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    nama: "Andi Pratama",
    komentar:
      "SIGUNA sangat membantu saya menemukan gedung yang tepat untuk acara pernikahan saya. Prosesnya mudah dan cepat!",
    foto: "/assets/images/user1.jpg",
    rating: 5,
  },
  {
    nama: "Siti Nurhaliza",
    komentar:
      "Pelayanannya luar biasa, sangat responsif dan gedungnya sesuai dengan ekspektasi. Mantap SIGUNA!",
    foto: "/assets/images/user2.jpg",
    rating: 4,
  },
  {
    nama: "Budi Hartono",
    komentar:
      "Sistem booking-nya gampang banget dipakai. Saya bisa pesan gedung hanya dalam beberapa klik!",
    foto: "/assets/images/user3.jpg",
    rating: 5,
  },
];

const TestimoniSlider = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Kata Mereka Tentang SIGUNA</h2>
        <Carousel
          indicators={false}
          controls={false}
          interval={3000}
          ride="carousel"
          pause={false}
          wrap={true}
        >
          {testimonials.map((testi, index) => (
            <Carousel.Item key={index}>
              <div className="text-center px-4">
                <img
                  src={testi.foto}
                  alt={testi.nama}
                  className="rounded-circle shadow mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <p className="fs-5 fst-italic">"{testi.komentar}"</p>
                <h6 className="fw-bold mt-2">{testi.nama}</h6>
                <div className="text-warning mb-2">
                  {Array.from({ length: testi.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimoniSlider;
