import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <h2 className="logo">Plagiarism Checker</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reports"> Reports</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;