import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Centralz (Hackout-2023)"
              description="It is a Centralized Database of the
              patients with all records in place. so that the doctor can see all
              the possible reasons for the patient' s illness  using MERN Stack "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Distance Learning"
              description="Developed and implemented a
              comprehensive distance learning platform to facilitate remote
              education and interactive online courses. using html5,css3 and php
              "
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ahmdatrack"
              description=" Dynamic cost efficient and environment
              friendly co-sharing journey and user friendly website. using Html,Css and php"
                          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="INTELLIDESIGN"
              description="The idea behind an INTELLIDESIGN is to
              make it easier for people to visualize and plan their home or
              space before making any changes. Using Python ,Open AI ,Kivy,Dally.
              "
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather App"
              description="WeatherApp is a sleek and user-friendly
              weather app that provides real-time weather updates for any
              location Using  React , OpenWeather API"             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Jarvis AI Assistant"
              description="This software agent can perform tasks or services for an individual based on commands or questions. virtual assistants are able to interpret human speech and respond via synthesized voices. Users can ask their assistants to perform some task.
              Using Python,Open Ai,Speech Recognition,pyttsx3"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
