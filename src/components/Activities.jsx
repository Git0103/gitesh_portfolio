import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaTheaterMasks, FaUsers, FaBook, FaFileAlt, FaTrophy } from 'react-icons/fa';

const ActivitiesSection = styled.section`
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

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ActivityCard = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ActivityIcon = styled.div`
  font-size: 2.5rem;
  color: #0984e3;
  margin-bottom: 1.5rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 1rem;
`;

const ActivityDescription = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ActivityDate = styled.span`
  color: #0984e3;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ActivityLink = styled.a`
  color: #0984e3;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #74b9ff;
  }
`;

const activities = [
  {
    title: "Cultural Secretary at CESA, LTCE",
    description: "carried out responsibility of organizing various cultural events such as talent show, story writing competition, etc. in the college.",
    icon: <FaUsers />,
    date: "2023-2024"
  },
  {
    title: "Drama Club (Natyavishkar) Lead",
    description: "Led the institute's drama club, organizing workshops, making short films, organizing drama events and mentoring junior students in drama.",
    icon: <FaTheaterMasks />,
    date: "2022-2024"
  },
  {
    title: "Research Paper Publication",
    description: "Published a research paper on 'Improving Availability in Supply Chain Management using Blockchain Technology' in the Journal of Emerging Technologies and Innovative Research (JETIR).",
    icon: <FaFileAlt />,
    date: "2024",
    link: "https://www.jetir.org/view?paper=JETIR2502751",
    linkText: "View Paper"
  }
];

const Activities = () => {
  return (
    <ActivitiesSection id="activities">
      <Container>
        <Title>Activities & Achievements</Title>
        <ActivitiesGrid>
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ActivityIcon>{activity.icon}</ActivityIcon>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDescription>{activity.description}</ActivityDescription>
              <ActivityDate>{activity.date}</ActivityDate>
              {activity.link && (
                <ActivityLink href={activity.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem' }}>
                  {activity.linkText}
                </ActivityLink>
              )}
            </ActivityCard>
          ))}
        </ActivitiesGrid>
      </Container>
    </ActivitiesSection>
  );
};

export default Activities; 