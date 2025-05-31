import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3436;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d3436;
`;

const ProjectDescription = styled.p`
  color: #636e72;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  background: #e9ecef;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #2d3436;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #0984e3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #74b9ff;
  }
`;

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project. Explain what it does and what technologies you used.",
    image: "/project1.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "Description of your second project. Highlight the key features and your role in development.",
    image: "/project2.jpg",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "Details about your third project. Mention any challenges you overcame and what you learned.",
    image: "/project3.jpg",
    tech: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com"
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map(tech => (
                    <Tech key={tech}>{tech}</Tech>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </Link>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </Link>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 