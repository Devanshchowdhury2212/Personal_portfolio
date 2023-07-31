import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import todo from "../../Assets/Projects/todo.png";
import attendance from "../../Assets/Projects/attendance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="SIGNATURE FORGERY DETECTION"
              description="This project made using Keras uses Convolutional Neural Networks and 
              Siamese Neural Networks to detect Forged signatures with an accuracy of 99%.
              The model was trained on the signatures of just 50 people and works for New Users 
              without retraining the model.Created a highly scalable model capable of one-shot learning.
              "
              link="https://github.com/Devanshchowdhury2212/Signature-Forgery-Detection-with-One-shot-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Auxiliary Attention Pooling Network Based Recording Device Detection System"
              description="The objective was to design a system/pipeline workflow that can accurately identify the identity of the source microphone from the recorded audio sample.
              The model achieved 86.9% accuracy beating the recent benchmarks by 3%(published in 2022). "
              link="https://github.com/Devanshchowdhury2212/Auxiliary-Attention-Pooling-Network-Based-Recording-Device-Detection-System/tree/main/BTP/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="IPL DATASET EDA INSIGHTS"
              description="Exploratory Data Analysis on IPL dataset using Pyspark to retrieve data for multiple queries. Gain Insights on how toss influences the result of the game and present it in an interactive diagram."
              link="https://github.com/Devanshchowdhury2212/Instagram-Web-scraping-"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="INSTAGRAM WEB SCRAPER"
              description="The Instabot allows to Search For a Username and can mine any information like a list of followers, following, posts, etc. The data scraped can be further used for detailed analysis. Used Selenium framework with Python and chrome web browser."
              link="https://github.com/Devanshchowdhury2212/Instagram-Web-scraping-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}  
              isBlog={false}
              title="Power-BI Dashboard"
              description="Created an Visually Attractive and Interactive Dashboard for Sales Analysis using Power BI Tool. 
              Answer any query related to the database on the go. Demo video attached to the Github.
              "
              link="https://github.com/Devanshchowdhury2212/Sales-Analysis-using-Power-BI-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;