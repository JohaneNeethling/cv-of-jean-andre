import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./WorkExperience.css";
import Maxicool from "./Photos/MaxiCool.jpeg";
import ERSBio from "./Photos/ErsBio.jpeg";
import ERSRoof from "./Photos/ErsRoof1.jpeg";
import CADCO from "./Photos/CadCo1.png";
import BuildIt from "./Photos/BuildIt1.png";

const experiences = [
  {
    img: Maxicool,
    title: "Maxicool, Stikland",
    role: "Technician",
    duration: "Aug 2017 - Jan 2018",
    description:
      "I specialized in installing refrigeration units on refrigerated trucks, ensuring optimal temperature control and reliability. I also repaired and maintained faulty units, quickly diagnosing and resolving issues to minimize downtime.",
    contact: "Philip @ 083 452 6202",
    contactLink: "tel:+27834526202",
    link: "https://www.maxicool.co.za/",
    note: "Contract Ended",
  },
  {
    img: ERSBio,
    title: "ERS Biometrics, Cape Town",
    role: "Senior Technician",
    duration: "Nov 2018 – Apr 2021",
    description:
      "I specialized in installing biometric clocking systems at access control points for secure employee time tracking. My role included servicing and repairing these systems to ensure uninterrupted operation. I also managed job documentation and reporting, monitored stock levels for necessary materials, and maintained company vehicles to ensure they were safe and ready for on-site visits.",
    contact: "Danie @ 076 828 9968",
    contactLink: "tel:+270768289968",
    link: "https://www.ersbio.co.za/",
    note: "Career Advancement",
  },
  {
    img: ERSRoof,
    title: "ERS Roofing & Steel, Gansbaai",
    role: "Assistant Manager",
    duration: "May 2021 – June 2022",
    description:
      "I have a proven track record of delivering excellent customer service through various channels, including in-person, phone, and email. I assist customers with product selection, payment processing, and manage returns, refunds, and exchanges. My problem-solving skills help me resolve issues professionally, even in stressful situations. I coordinate with suppliers, ensure warehouse compliance with Health & Safety, and am skilled in data entry, inventory management, deliveries, steel cutting, and forklift operation.",
    contact: "Freddie @ 074 702 4366",
    contactLink: "tel:+27747024366",
    link: "https://xplorio.com/gansbaai/ers-engineering-roofing-and-steel/",
    note: "Relocation",
  },
  {
    img: CADCO,
    title: "CADCO Building, Rondebosch",
    role: "Forman, Health & Safety Officer",
    duration: "June 2022 – June 2023",
    description:
      "I conducted health and safety audits, identified hazards, investigated incidents, and recommended improvements. I ensured compliance through inspections, managed the Health & Safety file, and provided protective equipment. I supervised over 30 workers, planned and managed tasks, created schedules, and oversaw machinery use. I also resolved conflicts, maintained a safe work environment, reported progress, and managed staffing and task delegation.",
    contact: "Steve @ 082 649 1884",
    contactLink: "tel:+27826491884",
    link: "https://www.facebook.com/CADCOBuildingConstruction/",
    note: "Relocation",
  },
  {
    img: BuildIt,
    title: "Build It, Gansbaai",
    role: "Sales",
    duration: "June 2023 – Present",
    description:
      "I manage the paint bar, ensuring efficient organization and inventory control. I excel in sales and offer expert advice on paint products and applications to both business and individual customers. My role involves overseeing stock organization with attention to detail, handling daily tasks, and contributing to store operations and customer satisfaction. My experience with customer interactions and internal processes makes me a valuable asset in any retail environment.",
    contact: "Tinus @ 083 294 2205",
    contactLink: "tel:+27832942205",
    link: "https://www.buildit-store.co.za/",
    note: "Currently Employed",
  },
];

function Experiences() {
  return (
    <div className="card-container">
      {experiences.map((exp, index) => (
        <Card key={index} style={{ width: "19rem" }} className="experCard">
          <Card.Img
            variant="top"
            src={exp.img}
            className="experImg"
            alt={`${exp.title} - ${exp.role}`}
          />
          <Card.Body>
            <Card.Title className="titleCard">
              <a href={exp.link} target="_blank" rel="noreferrer">
                {exp.title}
              </a>
            </Card.Title>
            <ListGroup>
              <ListGroup.Item className="posiTag">
                {exp.role} <br /> {exp.duration}
              </ListGroup.Item>
            </ListGroup>
            <Card.Text>{exp.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Contact <a href={exp.contactLink}>{exp.contact}</a>
            </ListGroup.Item>
            <ListGroup.Item>{exp.note}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default Experiences;
