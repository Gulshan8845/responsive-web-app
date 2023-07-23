// src/components/About.js

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt gravida orci, eu
        aliquet orci dignissim nec.
      </Content>
    </AboutContainer>
  );
};

export default About;
