const User = {
  id: "INT PRIMARY KEY AUTO_INCREMENT",
  name: "VARCHAR(255) NOT NULL",
  email: "VARCHAR(255) UNIQUE NOT NULL",
  password: "VARCHAR(255) NOT NULL",
  role: "ENUM('company', 'student') NOT NULL",
  created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
};

export default User;