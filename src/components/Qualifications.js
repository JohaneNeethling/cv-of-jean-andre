// Importing Stack component from react-bootstrap for layout
import Stack from "react-bootstrap/Stack"; // Stack allows for vertical spacing between elements
import "./Qualifications.css"; // Importing custom CSS for styling the Qualifications component
import Credentials from "./JeanAndreCredentials.pdf"; // Importing a PDF file containing credentials

// Defining the Qualifications functional component
function Qualifications() {
  return (
    <div className="qualificationsContainer">
      {" "}
      {/* Main container for qualifications section */}
      <Stack gap={3}>
        {" "}
        {/* Stack component to provide vertical spacing between child elements */}
        <div className="qualiTag">Did you know...?</div>{" "}
        {/* Tagline for the qualifications section */}
        <div className="qualiPara">
          {" "}
          {/* Paragraph containing qualifications details */}
          I’m certified in Occupational Health and Safety with extensive
          experience in implementing safety protocols in steel construction!
          Skilled in conducting risk assessments, developing safety plans, and
          ensuring compliance with safety regulations, I have a proven ability
          to promote a safe working environment through training, inspections,
          and effective communication. <br /> {/* Line break for spacing */}
          Don't believe me? See for yourself.
          <br /> {/* Line break for spacing */}
          {/* Link to download the credentials PDF */}
          <a href={Credentials} download>
            {" "}
            {/* Setting the href to the credentials file for download */}
            <button className="credButton">My Credentials</button>{" "}
            {/* Button for downloading credentials */}
          </a>
        </div>
      </Stack>
    </div>
  );
}

// Exporting the Qualifications component for use in other parts of the application
export default Qualifications;
