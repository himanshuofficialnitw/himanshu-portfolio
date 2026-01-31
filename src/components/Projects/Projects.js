import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { resumeData } from "../../data/resume";

const Projects = React.memo(function Projects() {
  // Extended project data with additional details for display
  const extendedProjects = [
    {
      ...resumeData.projects[0], // Grievance Portal
      imgPath: "https://raw.githubusercontent.com/himanshu-03/Portfolio/main/src/Assets/Projects/grievance.png",
      description: `${resumeData.projects[0].description}

Key Features:
• Real-time complaint tracking and status updates
• NLP-powered complaint categorization
• Automated routing to relevant departments
• Analytics dashboard for administrators
• Mobile-responsive design`,
      ghLink: "https://github.com/himanshuofficialnitw",
      demoLink: "https://grievance-portal.herokuapp.com/",
      techStack: resumeData.projects[0].technologies.join(", ")
    },
    {
      ...resumeData.projects[1], // NITADDA
      imgPath: "https://raw.githubusercontent.com/himanshu-03/Portfolio/main/src/Assets/Projects/nitadda.png",
      description: `${resumeData.projects[1].description}

Key Features:
• Resource sharing and categorization
• User authentication and authorization
• Search functionality with filters
• Rating and review system
• Real-time notifications`,
      ghLink: "https://github.com/himanshuofficialnitw/nitadda",
      demoLink: "https://nitadda.herokuapp.com/",
      techStack: resumeData.projects[1].technologies.join(", ")
    },
    {
      name: "Voyager AI Assistant",
      technologies: ["Generative AI", "SQL", "Python", "OpenAI"],
      description: "An AI-powered assistant that translates English text into SQL queries for business collaboration at Wayfair.",
      imgPath: "https://raw.githubusercontent.com/himanshu-03/Portfolio/main/src/Assets/Projects/chatbot.png",
      ghLink: "https://github.com/himanshuofficialnitw",
      techStack: "Generative AI, SQL, Python, OpenAI"
    }
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {extendedProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.name}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                techStack={project.techStack}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
});

export default Projects;
