const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
}));

// Koneksi ke MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// API untuk mendapatkan semua gedung
app.get("/gedung", (req, res) => {
    const sql = "SELECT * FROM gedung";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// API untuk menambah pemesanan gedung
app.post("/pemesanan", (req, res) => {
    const { nama, email, no_hp, gedung_id, tanggal } = req.body;
    const sql = "INSERT INTO pemesanan (nama, email, no_hp, gedung_id, tanggal) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [nama, email, no_hp, gedung_id, tanggal], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Pemesanan berhasil!" });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
