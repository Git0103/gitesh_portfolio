import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: #2d3436;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #dfe6e9;
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: #b2bec3;
`;

const MadeWith = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #b2bec3;
  font-size: 0.9rem;
`;

const HeartIcon = styled(FaHeart)`
  color: #e84393;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <FooterSection>
      <FooterContent>
        <Copyright>
          © {currentYear} Gitesh Patil. All rights reserved.
        </Copyright>
        <LastUpdated>
          Last updated: {lastUpdated}
        </LastUpdated>
        <MadeWith>
          Made with <HeartIcon /> using React and Vite
        </MadeWith>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer; 