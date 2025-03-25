import db from "../config/db.js";

export const submitRating = (req, res) => {
  const { student_id, company_id, rating, comment } = req.body;
  const sql = "INSERT INTO ratings (student_id, company_id, rating, comment) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [student_id, company_id, rating, comment], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Rating submitted successfully" });
  });
};

export const getRatings = (req, res) => {
  const { company_id } = req.params;
  const sql = "SELECT * FROM ratings WHERE company_id = ?";
  
  db.query(sql, [company_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};