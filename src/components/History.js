import React from "react"; // Importing React library
import Card from "react-bootstrap/Card"; // Importing Card component from React Bootstrap
import Row from "react-bootstrap/Row"; // Importing Row component from React Bootstrap
import Col from "react-bootstrap/Col"; // Importing Col component from React Bootstrap
import "./History.css"; // Importing CSS styles for the History component
import School from "./Photos/1.png"; // Importing an image for the School card
import Car from "./Photos/2.png"; // Importing an image for the Driver's License card
import Interests from "./Photos/3.png"; // Importing an image for the Interests card
import Lang from "./Photos/4.png"; // Importing an image for the Languages card

function History() {
  return (
    // Creating a Row to center the cards
    <Row className="justify-content-center">
      {[
        // An array of card data
        {
          img: School, // Image for the School card
          title: "School", // Title for the School card
          text: "Earned NSC Certificate from Monument Park High School (2012-2016)", // Description for the School card
          link: "http://hsmp.co.za/", // Link for the School card
        },
        {
          img: Car, // Image for the Driver's License card
          title: "Driver's License", // Title for the Driver's License card
          text: "Holds a Code B Driver's License (25 April 2017)", // Description for the Driver's License card
        },
        {
          img: Interests, // Image for the Interests card
          title: "Interests", // Title for the Interests card
          text: "I enjoy fishing, watching sports, catching up on the latest movies, and socializing with new people.", // Description for the Interests card
        },
        {
          img: Lang, // Image for the Languages card
          title: "Languages", // Title for the Languages card
          text: "Fluent in both English and Afrikaans.", // Description for the Languages card
        },
      ].map((card, index) => (
        // Mapping through each card object to create a column for each card
        <Col xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            style={{ width: "100%", textAlign: "center" }} // Styling the Card component
            className="hisIcon" // Applying a custom class for additional styling
          >
            <Card.Img variant="top" src={card.img} className="hisImg" />{" "}
            {/* Rendering the image for the card */}
            <Card.Body>
              <Card.Title className="hisTitle">{card.title}</Card.Title>{" "}
              {/* Rendering the card title */}
              <Card.Text className="hisText">
                {card.link ? ( // Conditional rendering: if a link exists
                  <a
                    href={card.link} // Link to be opened
                    target="_blank" // Opens the link in a new tab
                    rel="noreferrer" // Prevents the new page from accessing the previous page
                    className="monumentTag" // Applying a custom class for styling
                  >
                    {card.text} {/* Displaying the text with the link */}
                  </a>
                ) : (
                  card.text // Displaying the text without a link
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default History; // Exporting the History component for use in other files
