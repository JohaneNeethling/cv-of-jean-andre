// Import necessary modules and components
import { Link } from "react-router-dom"; // Link component for navigation
import "./Navbar.css"; // Import CSS for styling the navbar
import JeanAndre from "./Photos/JeanAndre.jpg"; // Import the logo image

// Define the Navigation component
function Navigation() {
  return (
    // Create a navigation bar
    <nav className="custom-navbar">
      <div className="navbar-container d-flex align-items-center">
        {/* Navbar brand/logo */}
        <div className="navbar-brand">
          <img src={JeanAndre} alt="Jean Andre" className="navbar-logo" />{" "}
          {/* Display logo */}
        </div>
        {/* Navbar links */}
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              {" "}
              {/* Link to Home page */}
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/get-to-know" className="nav-link">
              {" "}
              {/* Link to "Get to Know Me" page */}
              Get to Know Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link">
              {" "}
              {/* Link to "My Experience" page */}
              My Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/qualifications" className="nav-link">
              {" "}
              {/* Link to "My Qualifications" page */}
              My Qualifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              {" "}
              {/* Link to "Contact Me" page */}
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Export the Navigation component for use in other parts of the application
export default Navigation;
