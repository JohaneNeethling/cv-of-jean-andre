import { useEffect, useRef } from "react"; // Importing hooks from React
import { useSpring, animated } from "react-spring"; // Importing spring animations from react-spring
import Stack from "react-bootstrap/Stack"; // Importing Stack component from React Bootstrap
import "./Qualifications.css"; // Importing CSS styles for the Qualifications component
import Credentials from "./JeanAndreCredentials.pdf"; // Importing the PDF file for credentials

function Qualifications() {
  const ref = useRef(null); // Creating a ref to access the component's DOM element
  const [styles, api] = useSpring(() => ({
    opacity: 0, // Initial opacity set to 0 for animation
    transform: "translateY(20px)", // Initial position set for animation
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect(); // Getting the top position of the component
        if (top < window.innerHeight) {
          // Checking if the component is in the viewport
          api.start({
            opacity: 1, // Change opacity to 1 to fade in
            transform: "translateY(0px)", // Move to original position
            config: { duration: 500 }, // Animation duration
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // Adding scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup: remove event listener on unmount
  }, [api]); // Dependency array to avoid unnecessary re-renders

  return (
    <div className="qualificationsContainer">
      {" "}
      {/* Main container for qualifications */}
      <Stack gap={3} ref={ref} style={styles}>
        {" "}
        {/* Stack layout with spacing */}
        <animated.div
          className="qualiTag" // Tag for introductory text
          style={{ ...styles, transitionDelay: "100ms" }} // Animated styles with delay
        >
          Did you know...?
        </animated.div>
        <animated.div
          className="qualiPara" // Paragraph for qualifications description
          style={{ ...styles, transitionDelay: "200ms" }} // Animated styles with delay
        >
          I’m certified in Occupational Health and Safety with extensive
          experience in implementing safety protocols in steel construction!
          Skilled in conducting risk assessments, developing safety plans, and
          ensuring compliance with safety regulations, I have a proven ability
          to promote a safe working environment through training, inspections,
          and effective communication.
          <br />
          Don't believe me? See for yourself.
          <br />
          <a href={Credentials} download>
            {" "}
            {/* Link to download credentials PDF */}
            <animated.button
              className="credButton" // Button for downloading credentials
              style={{ ...styles, transitionDelay: "300ms" }} // Animated styles with delay
            >
              My Credentials
            </animated.button>
          </a>
        </animated.div>
      </Stack>
    </div>
  );
}

export default Qualifications; // Exporting the Qualifications component for use in other files
