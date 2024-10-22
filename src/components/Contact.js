import React, { useEffect, useRef } from "react";
import Phone from "./Photos/5.png"; // Phone icon
import Mail from "./Photos/6.png"; // Email icon
import Loca from "./Photos/7.png"; // Location icon
import Insta from "./Photos/8.png"; // Instagram icon
import "./Contact.css"; // Import CSS for styling

// Define the Contact functional component
function Contact() {
  const contactRef = useRef(null); // Create a ref for the contact container
  const itemsRef = useRef([]); // Create a ref array for contact items

  useEffect(() => {
    // Define options for the Intersection Observer
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the component is in view
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class when the element is in view
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      });
    }, observerOptions);

    // Start observing the contact container if it exists
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Observe each contact item, ensuring they're defined
    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item); // Start observing each item
      }
    });

    // Cleanup function to unobserve elements on component unmount
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current); // Clean up observer for the contact container
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item); // Clean up observer for each contact item
        }
      });
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="contact-container" ref={contactRef}>
      <h3 className="contact-title">Want to get in touch?</h3>
      <h4 className="contact-description">
        I welcome the opportunity to connect and discuss potential
        collaborations or job opportunities. I am mostly available via phone
        calls, but I also frequently check my email. I look forward to
        connecting with you.
      </h4>
      <div className="contact-info">
        {/* Container for contact information items */}
        {[
          // Array of contact items
          {
            img: Phone, // Phone icon
            alt: "Phone",
            link: "tel:+27762938390", // Phone link
            text: "076 293 8390", // Phone number text
            id: "phone", // Unique ID for the item
          },
          {
            img: Mail, // Email icon
            alt: "Email",
            link: "mailto:dup2344@gmail.com", // Email link
            text: "dup2344@gmail.com", // Email address text
            id: "email", // Unique ID for the item
          },
          {
            img: Insta, // Instagram icon
            alt: "Instagram",
            link: "https://www.instagram.com/jony.2344/", // Instagram link
            text: "Instagram", // Instagram text
            id: "instagram", // Unique ID for the item
          },
          {
            img: Loca, // Location icon
            alt: "Location",
            link: "https://www.tripsavvy.com/gansbaai-south-africa-the-complete-guide-5115988", // Location link
            text: "Gansbaai, Western Cape", // Location text
            id: "location", // Unique ID for the item
          },
        ].map(({ img, alt, link, text, id }, index) => (
          <div
            className="contact-item" // CSS class for styling
            key={id} // Use unique ID as the key for the list
            ref={(el) => (itemsRef.current[index] = el)} // Assign ref to items for observing
          >
            <img src={img} alt={alt} className="contact-icon" />
            <div className="contact-details">
              <a href={link} target="_blank" rel="noreferrer">
                {text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the Contact component for use in other parts of the application
export default Contact;
