import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import {
  SiLeetcode
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import {GrMail} from "react-icons/gr";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made by Devansh Chowdhury </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright DC {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto: devanshchowdhury@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GrMail />
              </a>
            </li>   
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/devansh-chowdhury-a41318192/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>            
            <li className="social-icons">
              <a
                href="https://github.com/Devanshchowdhury2212"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/devanshchowdhury007/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>            
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/amit18shankhwar/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                < AiFillInstagram />
              </a>
            </li> */}

            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
