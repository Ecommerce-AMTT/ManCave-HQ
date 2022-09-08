import React from "react";
import { Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="d-flex flex-wrap">
      <Card className="m-3 p-2" style={{ width: "18rem", background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898'}}>
        <Card.Img
          src="../../assets/images/pfp.jpg"
          className="card-img-top"
          alt="Coder"
        />
        <Card.Body className="container text-center ">
          <Card.Title style={{ fontSize: 30 }}>Alberto Londono</Card.Title>
          <Card.Text>
            When I'm not perfecting the art of coding or designing something, I
            am playing guitar, experimenting with new dishes for loved ones,
            watching anime, or playing on my pc or Nintendo Switch.
          </Card.Text>
        </Card.Body>
        <Card.Text className="container text-center " style={{ fontSize: 25 }}>
          <span className="contact-icons">
            <a href="mailto: londono.alberto110@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
          <span className="contact-icons m-2">
            <a
              href="https://www.linkedin.com/in/alberto-londono-261432235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-icons">
            <a
              href="https://github.com/Guapguap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </Card.Text>
      </Card>

      <Card className="m-3 p-2" style={{ width: "18rem", background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898'}}>
        <Card.Img
          src="../../assets/images/TP.jpeg"
          className="card-img-top"
          alt="Coder"
        />
        <Card.Body className="container text-center ">
          <Card.Title style={{ fontSize: 30 }}>Tony Poku</Card.Title>
          <Card.Text>
          Anthony Poku is a full-stack web developer, who is currently enrolled in the Northwestern Full-stack Web Developer Boot Camp.
          </Card.Text>
        </Card.Body>
        <Card.Text className="container text-center " style={{ fontSize: 25 }}>
          <span className="contact-icons">
            <a href="mailto: anthonypoku2022@u.northwestern.edu">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
          <span className="contact-icons m-2">
            <a
              href="https://www.linkedin.com/in/anthony-poku-3b10b734"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-icons">
            <a
              href="https://github.com/tonypoku-ghub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </Card.Text>
      </Card>

      
    </Container>
  );
}

