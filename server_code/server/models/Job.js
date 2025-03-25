const Job = {
  id: "INT PRIMARY KEY AUTO_INCREMENT",
  company_id: "INT NOT NULL",
  job_title: "VARCHAR(255) NOT NULL",
  job_description: "TEXT NOT NULL",
  created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
};

export default Job;