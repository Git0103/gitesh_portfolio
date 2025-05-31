import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
`;

const ContactText = styled.p`
  color: #636e72;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #0984e3;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #74b9ff;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2d3436;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0984e3;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0984e3;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #0984e3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #74b9ff;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
`;

const SuccessMessage = styled(StatusMessage)`
  background-color: #00b894;
  color: white;
`;

const ErrorMessage = styled(StatusMessage)`
  background-color: #d63031;
  color: white;
`;

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      //contact form EmailJS logic
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Send the email
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      console.log('EmailJS Response:', result);

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        formRef.current.reset();
      } else {
        throw new Error(`Failed to send message: ${result.text}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: `Failed to send message: ${error.message || 'Please try again later.'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Contact Me</Title>
        <ContactGrid>
          <ContactInfo>
            <ContactText>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </ContactText>
            <SocialLinks>
              <SocialLink href="https://github.com/Git0103" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/gitesh0103" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://x.com/thisis_Gitesh" target="_blank" rel="noopener noreferrer">
                <SiX />
              </SocialLink>
              <SocialLink href="mailto:giteshmp01@gmail.com">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="user_name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="user_email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" required />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.type && (
              status.type === 'success' ? (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </SuccessMessage>
              ) : (
                <ErrorMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </ErrorMessage>
              )
            )}
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 