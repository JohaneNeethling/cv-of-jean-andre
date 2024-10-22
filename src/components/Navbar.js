import { Link } from "react-router-dom"; // Import Link for navigation between routes
import "./Navbar.css"; // Import CSS for styling the navbar
import Container from "react-bootstrap/Container"; // Import Container component from react-bootstrap
import Nav from "react-bootstrap/Nav"; // Import Nav component from react-bootstrap
import Navbar from "react-bootstrap/Navbar"; // Import Navbar component from react-bootstrap

function Navigation() {
  return (
    <Navbar
      bg="dark" // Set background color to dark
      data-bs-theme="dark" // Use Bootstrap dark theme
      expand="lg" // Expand navbar on large screens
      className="navbar-custom" // Custom CSS class for additional styling
    >
      <Container>
        {" "}
        {/* Bootstrap container for layout */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          {" "}
          {/* Brand logo linking to home */}
          Jean-Andre du Plessis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
        {/* Toggle button for mobile view */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {" "}
          {/* Collapsible navbar items */}
          <Nav className="ml-auto">
            {" "}
            {/* Navigation links */}
            <Nav.Link as={Link} to="/home" className="nav-link">
              {" "}
              {/* Link to Home */}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/get-to-know" className="nav-link">
              {" "}
              {/* Link to Get to Know */}
              Get to Know
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" className="nav-link">
              {" "}
              {/* Link to Experience */}
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/qualifications" className="nav-link">
              {" "}
              {/* Link to Qualifications */}
              Qualifications
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              {" "}
              {/* Link to Contact */}
              Contact
            </Nav.Link>
            {/* Add more links here if needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation; // Export the Navigation component for use in other parts of the application
