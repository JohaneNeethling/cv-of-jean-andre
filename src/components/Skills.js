// Importing Stack component from react-bootstrap for layout
import Stack from "react-bootstrap/Stack";
import "./Skills.css"; // Import CSS for styling
import Problem from "./Photos/problem.png"; // Import Problem-Solving image
import Honesty from "./Photos/honesty.png"; // Import Honesty image
import Communication from "./Photos/communications.png"; // Import Communication image
import Time from "./Photos/time.png"; // Import Time Management image
import { useEffect } from "react"; // Import useEffect hook from React

// Defining the Skills functional component
function Skills() {
  useEffect(() => {
    const elements = document.querySelectorAll(".skillsTag, .skillsPara"); // Select both the skillsTag and skillsPara
    const onScroll = () => {
      // Scroll event handler
      const windowHeight = window.innerHeight; // Get the viewport height

      elements.forEach((element) => {
        // Iterate through each selected element
        const elementTop = element.getBoundingClientRect().top; // Get the position of the element

        if (elementTop < windowHeight - 50) {
          // Trigger when element is near the viewport
          element.classList.add("visible"); // Add the visible class to trigger animations
        }
      });
    };

    window.addEventListener("scroll", onScroll); // Add scroll event listener
    onScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", onScroll); // Cleanup listener on component unmount
  }, []); // Empty dependency array to run effect only on mount

  return (
    <div className="skillsContainer">
      {" "}
      {/* Main container for skills */}
      <Stack gap={3}>
        {" "}
        {/* Stack layout for spacing */}
        <div className="skillsTag">I'm also skilled at...</div>{" "}
        {/* Skills introduction */}
        {/* Problem-Solving Skill */}
        <div className="skillsPara">
          <div className="skillsHeader">
            {" "}
            {/* Header for Problem-Solving skill */}
            <img
              src={Problem}
              alt="Problem Solving"
              className="skillsImage"
            />{" "}
            {/* Problem image */}
            <h4 className="myh4">Problem-Solving</h4>{" "}
            {/* Problem-Solving title */}
          </div>
          <p>
            Skilled in identifying and resolving complex issues with innovative
            solutions. I use analytical thinking and creativity to troubleshoot
            challenges, optimize processes, and drive continuous improvement.
            Proactive and collaborative, I deliver effective results in
            team-based environments.
          </p>
        </div>
        {/* Honesty Skill */}
        <div className="skillsPara">
          <div className="skillsHeader">
            {" "}
            {/* Header for Honesty skill */}
            <img src={Honesty} alt="Honesty" className="skillsImage" />{" "}
            {/* Honesty image */}
            <h4 className="myh4">Honesty</h4> {/* Honesty title */}
          </div>
          <p>
            Committed to maintaining transparency and integrity in all
            professional interactions. I value trust and consistently provide
            honest feedback, uphold ethical standards, and act with sincerity in
            decision-making and communication.
          </p>
        </div>
        {/* Communication Skill */}
        <div className="skillsPara">
          <div className="skillsHeader">
            {" "}
            {/* Header for Communication skill */}
            <img
              src={Communication}
              alt="Communication"
              className="skillsImage"
            />{" "}
            {/* Communication image */}
            <h4 className="myh4">Communication</h4> {/* Communication title */}
          </div>
          <p>
            Clear and effective communicator, skilled in conveying information
            and ideas to diverse audiences. I excel in both written and verbal
            communication, fostering strong relationships and ensuring mutual
            understanding. My active listening and feedback abilities enhance
            collaboration and resolve issues efficiently.
          </p>
        </div>
        {/* Time Management Skill */}
        <div className="skillsPara">
          <div className="skillsHeader">
            {" "}
            {/* Header for Time Management skill */}
            <img
              src={Time}
              alt="Time Management"
              className="skillsImage"
            />{" "}
            {/* Time Management image */}
            <h4 className="myh4">Time Management</h4>{" "}
            {/* Time Management title */}
          </div>
          <p>
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
