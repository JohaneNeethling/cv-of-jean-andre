import Stack from "react-bootstrap/Stack"; // Import Stack component from react-bootstrap for layout
import "./GetToKnow.css"; // Import CSS for styling
import Jean from "./Photos/JeanAndre.jpg"; // Import the image of Jean-Andre

function GetToKnow() {
  return (
    <div className="getKnowContainer">
      {" "}
      {/* Main container for the component */}
      <Stack direction="horizontal" gap={3}>
        {" "}
        {/* Horizontal stack layout with a gap between items */}
        <img
          src={Jean}
          alt="Jean-Andre du Plessis"
          className="getKnowImage"
        />{" "}
        {/* Display the image with an alt text */}
        <div className="getKnowText">
          {" "}
          {/* Container for the text content */}
          <div className="getKnowTag">Let's get to know each other.</div>{" "}
          {/* Tagline */}
          <div className="getKnowPara">
            {" "}
            {/* Paragraph containing personal information */}
            I’m a 26-year-old results-driven professional known for my
            dedication and proactive approach. I thrive in team environments
            where I build strong relationships with colleagues, clients, and
            suppliers. Outside of work, I’m an avid fisherman, which fuels my
            patience and focus. I’m passionate about tackling new challenges and
            using my problem-solving skills and creativity to drive team
            success. With excellent communication, adaptability, and a keen
            desire to learn, I’m excited to contribute to a dynamic team and
            advance my career in a role that values continuous improvement and
            expertise.
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default GetToKnow; // Export the GetToKnow component for use in other parts of the application
