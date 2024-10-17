// Importing necessary components from react-bootstrap
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Importing custom CSS for styling the component
import "./History.css";

// Importing images for the cards
import School from "./Photos/1.png"; // Image for the School card
import Car from "./Photos/2.png"; // Image for the Driver's License card
import Interests from "./Photos/3.png"; // Image for the Interests card
import Lang from "./Photos/4.png"; // Image for the Languages card

// Defining the History functional component
function History() {
  return (
    // Row component to align cards centrally
    <Row className="justify-content-center">
      {/* Card for School */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          style={{ width: "100%", textAlign: "center" }} // Styling for the card
          className="hisIcon" // Custom class for additional styling
        >
          <Card.Img variant="top" src={School} className="hisImg" />{" "}
          {/* School image */}
          <Card.Body>
            <Card.Title className="hisTitle">School</Card.Title>{" "}
            {/* Title of the card */}
            <Card.Text>
              Earned NSC Certificate from
              {/* Link to the school's website */}
              <a
                href="http://hsmp.co.za/"
                target="_blank" // Opens the link in a new tab
                rel="noreferrer" // Prevents the new page from accessing the previous page's window
                className="monumentTag" // Custom class for link styling
              >
                Monument Park High School
              </a>{" "}
              (2012-2016)
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for Driver's License */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          style={{ width: "100%", textAlign: "center" }}
          className="hisIcon"
        >
          <Card.Img variant="top" src={Car} className="hisImg" />{" "}
          {/* Driver's License image */}
          <Card.Body>
            <Card.Title className="hisTitle">Driver's License</Card.Title>{" "}
            {/* Title */}
            <Card.Text>
              Holds a Code B Driver's License (25 April 2017){" "}
              {/* License details */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for Interests */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          style={{ width: "100%", textAlign: "center" }}
          className="hisIcon"
        >
          <Card.Img variant="top" src={Interests} className="hisImg" />{" "}
          {/* Interests image */}
          <Card.Body>
            <Card.Title className="hisTitle">Interests</Card.Title>{" "}
            {/* Title */}
            <Card.Text>
              I enjoy fishing, watching sports, catching up on the latest
              movies, and socializing with new people. {/* Interests listed */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for Languages */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          style={{ width: "100%", textAlign: "center" }}
          className="hisIcon"
        >
          <Card.Img variant="top" src={Lang} className="hisImg" />{" "}
          {/* Languages image */}
          <Card.Body>
            <Card.Title className="hisTitle">Languages</Card.Title>{" "}
            {/* Title */}
            <Card.Text>
              Fluent in both English and Afrikaans. {/* Language skills */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

// Exporting the History component for use in other parts of the application
export default History;
