import React from "react";

const GedungList = ({ gedung }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Pilih Gedung Impianmu</h2>
      <p className="text-center text-muted mb-5">
        Temukan gedung terbaik dengan fasilitas premium dan harga terbaik.
      </p>

      <div className="row">
        {gedung.map((g) => (
          <div className="col-md-6 col-lg-4 mb-4" key={g.id}>
            <div className="card h-100 shadow-sm border-0">
              {g.gambar ? (
                <img
                  src={g.gambar}
                  alt={g.nama}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ height: "200px", color: "#aaa" }}
                >
                  No Image
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title fw-bold">{g.nama}</h5>
                <p className="card-text text-muted">{g.lokasi}</p>
                <p className="card-text text-success fw-semibold">
                  Rp {g.harga.toLocaleString("id-ID")}
                </p>
                <a
                  href="/booking"
                  className="btn w-100"
                  style={{
                    backgroundColor: "#00b0f0",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GedungList;
