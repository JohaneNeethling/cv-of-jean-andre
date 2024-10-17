// Importing Stack component from react-bootstrap for layout
import Stack from "react-bootstrap/Stack"; // Stack allows for vertical spacing between elements
import "./Skills.css"; // Importing custom CSS for styling the Skills component
import Problem from "./Photos/problem.png"; // Importing image for problem-solving skill
import Honesty from "./Photos/honesty.png"; // Importing image for honesty skill
import Communication from "./Photos/communications.png"; // Importing image for communication skill
import Time from "./Photos/time.png"; // Importing image for time management skill

// Defining the Skills functional component
function Skills() {
  return (
    <div className="skillsContainer">
      {" "}
      {/* Main container for skills section */}
      <Stack gap={3}>
        {" "}
        {/* Stack component to provide vertical spacing between child elements */}
        <div className="skillsTag">I'm also skilled at...</div>{" "}
        {/* Tagline for the skills section */}
        {/* Problem-Solving Skill */}
        <div className="skillsPara">
          {" "}
          {/* Container for problem-solving skill details */}
          <div className="skillsHeader">
            {" "}
            {/* Header containing image and title */}
            <img
              src={Problem}
              alt="Problem Solving"
              className="skillsImage"
            />{" "}
            {/* Image with alt text */}
            <h4 className="myh4">Problem-Solving</h4>{" "}
            {/* Title for the skill */}
          </div>
          <p>
            {" "}
            {/* Description of problem-solving skill */}
            Skilled in identifying and resolving complex issues with innovative
            solutions. I use analytical thinking and creativity to troubleshoot
            challenges, optimize processes, and drive continuous improvement.
            Proactive and collaborative, I deliver effective results in
            team-based environments.
          </p>
        </div>
        {/* Honesty Skill */}
        <div className="skillsPara">
          {" "}
          {/* Container for honesty skill details */}
          <div className="skillsHeader">
            {" "}
            {/* Header containing image and title */}
            <img src={Honesty} alt="Honesty" className="skillsImage" />{" "}
            {/* Image with alt text */}
            <h4 className="myh4">Honesty</h4> {/* Title for the skill */}
          </div>
          <p>
            {" "}
            {/* Description of honesty skill */}
            Committed to maintaining transparency and integrity in all
            professional interactions. I value trust and consistently provide
            honest feedback, uphold ethical standards, and act with sincerity in
            decision-making and communication.
          </p>
        </div>
        {/* Communication Skill */}
        <div className="skillsPara">
          {" "}
          {/* Container for communication skill details */}
          <div className="skillsHeader">
            {" "}
            {/* Header containing image and title */}
            <img
              src={Communication}
              alt="Communication"
              className="skillsImage" // Image with alt text
            />
            <h4 className="myh4">Communication</h4> {/* Title for the skill */}
          </div>
          <p>
            {" "}
            {/* Description of communication skill */}
            Clear and effective communicator, skilled in conveying information
            and ideas to diverse audiences. I excel in both written and verbal
            communication, fostering strong relationships and ensuring mutual
            understanding. My active listening and feedback abilities enhance
            collaboration and resolve issues efficiently.
          </p>
        </div>
        {/* Time Management Skill */}
        <div className="skillsPara">
          {" "}
          {/* Container for time management skill details */}
          <div className="skillsHeader">
            {" "}
            {/* Header containing image and title */}
            <img
              src={Time}
              alt="Time Management"
              className="skillsImage"
            />{" "}
            {/* Image with alt text */}
            <h4 className="myh4">Time Management</h4>{" "}
            {/* Title for the skill */}
          </div>
          <p>
            {" "}
            {/* Description of time management skill */}
            Proficient in organizing and prioritizing tasks to meet deadlines
            and achieve goals efficiently. I balance multiple responsibilities
            effectively, adapt to shifting priorities, and maintain productivity
            under pressure. My disciplined approach ensures timely completion of
            projects and optimal use of resources.
          </p>
        </div>
      </Stack>
    </div>
  );
}

// Exporting the Skills component for use in other parts of the application
export default Skills;
