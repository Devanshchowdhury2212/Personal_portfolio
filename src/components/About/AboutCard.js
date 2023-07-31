import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devansh Chowdhury </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />I am final year student pursuing Integrated Btech MBA in IT from <span className="purple">IIIT GWALIOR.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Chess
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Avid Anime Watcher
            </li>
            
          </ul>
          <br></br>
          <p style={{ color: "#c770f0" }}>
            "If my mind can conceive it, and my heart can believe it,<br></br>then I can achieve it"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
