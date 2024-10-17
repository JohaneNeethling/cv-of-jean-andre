// Import the Stack component from React Bootstrap for layout management
import Stack from "react-bootstrap/Stack";
// Import CSS styles for the GetToKnow component
import "./GetToKnow.css";

// Define the GetToKnow functional component
function GetToKnow() {
  return (
    <div className="getKnowContainer">
      {" "}
      {/* Main container for the component */}
      <Stack gap={3}>
        {" "}
        {/* Stack component for vertical spacing between items */}
        <div className="getKnowTag">Let's get to know each other.</div>{" "}
        {/* Tagline for the section */}
        <div className="getKnowPara">
          {" "}
          {/* Paragraph for personal introduction */}
          I’m a 26-year-old results-driven professional known for my dedication
          and proactive approach. I thrive in team environments where I build
          strong relationships with colleagues, clients, and suppliers. Outside
          of work, I’m an avid fisherman, which fuels my patience and focus. I’m
          passionate about tackling new challenges and using my problem-solving
          skills and creativity to drive team success. With excellent
          communication, adaptability, and a keen desire to learn, I’m excited
          to contribute to a dynamic team and advance my career in a role that
          values continuous improvement and expertise.
        </div>
      </Stack>
    </div>
  );
}

// Export the GetToKnow component for use in other parts of the application
export default GetToKnow;
