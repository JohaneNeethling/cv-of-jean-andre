// Import CSS styles for the footer
import "./Footer.css";

// Define the Footer functional component
function Footer() {
  return (
    <footer className="footer">
      {" "}
      {/* Main footer element */}
      <div className="footer-content">
        {" "}
        {/* Container for footer content */}
        <p>
          {" "}
          {/* Paragraph for copyright and attribution */}© 2024 Jean-Andre du
          Plessis. All rights reserved. | Coded by{" "}
          <a
            href="https://online-architect.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Your Digital Architect
          </a>
        </p>
      </div>
    </footer>
  );
}

// Export the Footer component for use in other parts of the application
export default Footer;
