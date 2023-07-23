// src/components/MainContent.js

import React from 'react';
import styled from 'styled-components';

const MainContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.6;
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <Title>Welcome to Our Website</Title>
      <Subtitle>Explore and Enjoy</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod dapibus sapien non
        scelerisque.
      </Description>
    </MainContentContainer>
  );
};

export default MainContent;
