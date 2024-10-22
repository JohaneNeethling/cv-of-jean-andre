import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./History.css";
import School from "./Photos/1.png";
import Car from "./Photos/2.png";
import Interests from "./Photos/3.png";
import Lang from "./Photos/4.png";

function History() {
  return (
    <Row className="justify-content-center">
      {[
        {
          img: School,
          title: "School",
          text: "Earned NSC Certificate from Monument Park High School (2012-2016)",
          link: "http://hsmp.co.za/",
        },
        {
          img: Car,
          title: "Driver's License",
          text: "Holds a Code B Driver's License (25 April 2017)",
        },
        {
          img: Interests,
          title: "Interests",
          text: "I enjoy fishing, watching sports, catching up on the latest movies, and socializing with new people.",
        },
        {
          img: Lang,
          title: "Languages",
          text: "Fluent in both English and Afrikaans.",
        },
      ].map((card, index) => (
        <Col xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            style={{ width: "100%", textAlign: "center" }}
            className="hisIcon"
          >
            <Card.Img variant="top" src={card.img} className="hisImg" />
            <Card.Body>
              <Card.Title className="hisTitle">{card.title}</Card.Title>
              <Card.Text className="hisText">
                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="monumentTag"
                  >
                    {card.text}
                  </a>
                ) : (
                  card.text
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default History;
