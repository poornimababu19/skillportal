import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Form Portal</h1>
      <div>
        <Link to="/register" className="mr-4">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;