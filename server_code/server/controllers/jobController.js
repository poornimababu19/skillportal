import db from "../config/db.js";

export const createJob = (req, res) => {
  const { company_id, job_title, job_description } = req.body;
  const sql = "INSERT INTO jobs (company_id, job_title, job_description) VALUES (?, ?, ?)";
  
  db.query(sql, [company_id, job_title, job_description], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Job created successfully" });
  });
};

export const getJobs = (req, res) => {
  const sql = "SELECT * FROM jobs";
  
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};