// Import images and CSS styles
import Phone from "./Photos/5.png"; // Phone icon
import Mail from "./Photos/6.png"; // Email icon
import Loca from "./Photos/7.png"; // Location icon
import Insta from "./Photos/8.png"; // Instagram icon
import "./Contact.css"; // Import CSS for styling

// Define the Contact functional component
function Contact() {
  return (
    <div className="contact-container">
      {" "}
      {/* Main container for the contact section */}
      <h3 className="contact-title">Want to get in touch?</h3>{" "}
      {/* Contact section title */}
      <h4 className="contact-description">
        I welcome the opportunity to connect and discuss potential
        collaborations or job opportunities. I am mostly available via phone
        calls, but I also frequently check my email. I look forward to
        connecting with you.
      </h4>{" "}
      {/* Brief description of availability for contact */}
      <div className="contact-info">
        {" "}
        {/* Container for contact information items */}
        <div className="contact-item">
          {" "}
          {/* Individual contact item for phone */}
          <img src={Phone} alt="Phone" className="contact-icon" />{" "}
          {/* Phone icon */}
          <div className="contact-details">
            <a href="tel:+27762938390">076 293 8390</a>{" "}
            {/* Phone number with a link to dial */}
          </div>
        </div>
        <div className="contact-item">
          {" "}
          {/* Individual contact item for email */}
          <img src={Mail} alt="Email" className="contact-icon" />{" "}
          {/* Email icon */}
          <div className="contact-details">
            <a href="mailto:dup2344@gmail.com">dup2344@gmail.com</a>{" "}
            {/* Email link */}
          </div>
        </div>
        <div className="contact-item">
          {" "}
          {/* Individual contact item for Instagram */}
          <img src={Insta} alt="Instagram" className="contact-icon" />{" "}
          {/* Instagram icon */}
          <div className="contact-details">
            <a
              href="https://www.instagram.com/jony.2344/" // Instagram profile link
              target="_blank" // Opens link in a new tab
              rel="noreferrer" // Security measure to prevent leakage of referrer information
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="contact-item">
          {" "}
          {/* Individual contact item for location */}
          <img src={Loca} alt="Location" className="contact-icon" />{" "}
          {/* Location icon */}
          <div className="contact-details">
            <a
              href="https://www.tripsavvy.com/gansbaai-south-africa-the-complete-guide-5115988" // Location link
              target="_blank" // Opens link in a new tab
              rel="noreferrer" // Security measure
            >
              Gansbaai, Western Cape
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Contact component for use in other parts of the application
export default Contact;
