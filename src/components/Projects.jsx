import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import jobSearchWeb from '../assets/jobSearchWeb.png';
import suppChainMan from '../assets/SuppChainMan.jpg';
import resumeLogo from '../assets/logo.jpg';

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
    title: "Supply Chain Management using Blockchain",
    description: "A Supply Chain Management System designed using React.js and Blockchain technology. The system was tested on local blockchain simulation using Ganache",
    image: suppChainMan,
    tech: ["React.js", "Web3.js", "Ethers.js", "Solidity", "Ganache"],
    github: "https://github.com/Git0103/Supply_Chain_Blockchain_Proj",
    live: "https://github.com/Git0103/Supply_Chain_Blockchain_Proj"
  },
  {
    title: "Job Search Website",
    description: "A simple job search website that allows users to search for jobs and apply to them. Made using React-Vite, and Firebase.",
    image: jobSearchWeb,
    tech: ["React", "Firebase"],
    github: "https://github.com/Git0103/job-search-website",
    live: "https://job-search-website-phi.vercel.app/"
  },
  {
    title: "Resume Analyzer",
    description: "An Natural Language Processing project made using Python and NLP technologies.",
    image: resumeLogo,
    tech: ["Python", "NLP"],
    github: "https://github.com/Git0103/resume_analyzer",
    live: "https://github.com/Git0103/resume_analyzer"
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