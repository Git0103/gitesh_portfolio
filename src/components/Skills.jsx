import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #ffffff;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0984e3;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background: #dfe6e9;
  border-radius: 3px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background: #0984e3;
  width: ${props => props.level}%;
`;

const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
  { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
  { name: 'CSS3', icon: <SiCss3 />, level: 90 },
  { name: 'Database', icon: <FaDatabase />, level: 80 },
  { name: 'Git', icon: <FaGitAlt />, level: 85 },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <Title>Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel>
                <SkillProgress level={skill.level} />
              </SkillLevel>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 