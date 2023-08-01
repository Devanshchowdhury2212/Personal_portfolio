import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import myphoto from '../../Assets/myphoto.png';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import {
  SiLeetcode,
  SiGeeksforgeeks
} from "react-icons/si";
import { FaCircle, FaLinkedinIn } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import {GrMail} from "react-icons/gr";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Devansh Chowdhury</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

        {/* Home2.js imported into Home.js */}
        <Container className="home-about-section">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                  <br />I am Devansh Chowdhury, an experienced Computer science student with a strong background in Machine Learning, Data structures & algorithms, and Web development<span className="purple"> from IIIT GWALIOR.</span>
                <br />As a highly motivated and detail-oriented individual, I possess a passion for solving complex problems and creating innovative solutions. With hands-on experience in developing software applications and a deep understanding of programming languages such as Python ,MYSQL, C++ along with good command over multiple technology.
                <br /> I am confident in my ability to contribute to any software engineering team. My strong communication skills and ability to collaborate effectively with team members make me an excellent fit for any SDE position.
                
                <br />
                {/* <br />I am proficient in langauges like
                <b className="purple"> C++, Python, Javascript</b> and <b className="purple">SQL,MongoDB</b>
                <br />
                <br /> */}
                {/* My fields of interest are building and designing&nbsp;
                <b className="purple">Websites</b>
                , practicing
                <b className="purple"> Data Structures and Algorithms problems </b>
                and also in areas related to{" "}
                <b className="purple">Automation</b>
                {" "}and implementing various {" "}
                <b className="purple">Optimization Algorithms.</b>
                <br /> */}
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myphoto} style={{borderRadius:"50%",verticalAlign:"middle", objectFit:"cover", height:"300px", width:"300px"}} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>MY <span className="purple">PROFILES</span></h1> <br></br>
               <p>
                Feel free to <span className="purple">connect </span>with me
              </p> 
              <ul className="home-about-social-links">
                 <li className="social-icons">
                  <a
                    href="mailto: devanshchowdhury@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <GrMail />
                  </a>
                </li>      
                {/* <li className="social-icons">
                  <a
                    href="tel: +918921180389"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FiPhoneCall />
                  </a>
                </li>    */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/devansh-chowdhury-a41318192/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>              
                <li className="social-icons">
                  <a
                    href="https://github.com/Devanshchowdhury2212"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/devanshchowdhury007/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://auth.geeksforgeeks.org/user/devanshchowdhury1/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiGeeksforgeeks />
                  </a>
                </li>
                {/* <li className="social-icons">
                  <a
                    href="bit.ly/devansh_chowdhury_007"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li> */}

              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
