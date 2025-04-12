import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const [gedung, setGedung] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gedung")
      .then((response) => response.json())
      .then((data) => setGedung(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Daftar Gedung</h1>
      <div className="row">
        {gedung.length > 0 ? (
          gedung.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card p-3 shadow-sm">
                <div className="card-body">
                  <h2 className="h5">{item.nama}</h2>
                  <p className="text-muted">{item.alamat}</p>
                  <p className="fw-bold text-success">Rp {item.harga.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
