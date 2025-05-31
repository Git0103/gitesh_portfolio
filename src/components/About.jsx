import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import myPhoto from '../assets/meagain.jpg';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  display: flex;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PhotoContainer = styled(motion.div)`
  flex: 1;
  max-width: 400px;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #636e72;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <PhotoContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Photo src={myPhoto} alt="Gitesh Patil" />
        </PhotoContainer>
        <ContentContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>About Me</Title>
          <Description>
            Hello! I'm Gitesh Patil, a passionate Front-end developer with a strong background in technologies like HTML, CSS, JavaScript, and React.js.
            I love creating innovative solutions and tackling complex problems.
          </Description>
          <Description>
            I'm always eager to learn new technologies and take on challenging projects.
          </Description>
        </ContentContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 