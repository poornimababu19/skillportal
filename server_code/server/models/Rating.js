const Rating = {
  id: "INT PRIMARY KEY AUTO_INCREMENT",
  student_id: "INT NOT NULL",
  company_id: "INT NOT NULL",
  rating: "INT CHECK (rating BETWEEN 1 AND 5)",
  comment: "TEXT",
  rated_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
};

export default Rating;