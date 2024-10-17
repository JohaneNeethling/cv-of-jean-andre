import { Link } from "react-router-dom"; // Link component for client-side routing
import "./Navbar.css"; // Importing custom CSS for navbar styling
import JeanAndre from "./Photos/JeanAndre.jpg"; // Importing logo image for the navbar

// Defining the Navigation functional component
function Navigation() {
  return (
    // Custom navbar with class name for styling
    <nav className="custom-navbar">
      <div className="navbar-container">
        {/* Brand/logo section */}
        <div className="navbar-brand">
          <img src={JeanAndre} alt="Jean Andre" className="navbar-logo" />
        </div>
        {/* Navigation links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/get-to-know" className="nav-link">
              Get to Know Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link">
              My Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/qualifications" className="nav-link">
              My Qualifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Exporting the Navigation component for use in other parts of the application
export default Navigation;
