import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: #0984e3;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 2rem 0;
  position: relative;
  width: 50%;
  left: ${props => props.align === 'right' ? '50%' : '0'};
  padding-${props => props.align === 'right' ? 'left' : 'right'}: 3rem;
  padding-${props => props.align === 'right' ? 'right' : 'left'}: 0;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 3rem;
    padding-right: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TimelineIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #0984e3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${props => props.align === 'right' ? 'left: -20px;' : 'right: -20px;'}

  @media (max-width: 768px) {
    left: -20px;
    right: auto;
  }
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const School = styled.h4`
  font-size: 1.2rem;
  color: #0984e3;
  margin-bottom: 0.5rem;
`;

const Result = styled.h4`
  font-size: 1.0rem;
  color: #000000;
  margin-bottom: 0.5rem;
`;

const Date = styled.p`
  color: #636e72;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #636e72;
  line-height: 1.6;
`;

const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    result: "8.0 CGPA",
    date: "2021 - 2025",
    description: "Relevant coursework in Data Structures, Algorithms, Computer Networks, Web Development, and Database Management Systems."
  },
  {
    degree: "Higher Secondary Education",
    school: "K. R. Kotkar Junior College, Chalisgaon",
    result: "90.17%",
    date: "2019 - 2021",
    description: "Completed with distinction. Participated in various extra-curricular activities and competitions."
  },
  {
    degree: "Secondary School Education",
    school: "T. S. Madyamik Vidyalaya, Chalisgaon",
    result: "89.60%",
    date: "2018 - 2019",
    description: "Completed with distinction. Scored third highest in the school."
  }
];

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <Title>Education</Title>
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.degree}
              align={index % 2 === 0 ? 'left' : 'right'}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineIcon align={index % 2 === 0 ? 'left' : 'right'}>
                <FaGraduationCap />
              </TimelineIcon>
              <TimelineContent>
                <Degree>{edu.degree}</Degree>
                <School>{edu.school}</School>
                <Result>{edu.result}</Result>
                <Date>{edu.date}</Date>
                <Description>{edu.description}</Description>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </EducationSection>
  );
};

export default Education; 