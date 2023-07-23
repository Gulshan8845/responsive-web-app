// src/components/Contact.js

import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const ContactInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactForm>
        <ContactInput type="text" placeholder="Your Name" />
        <ContactInput type="email" placeholder="Your Email" />
        <ContactTextArea placeholder="Your Message" rows="4" />
        <ContactButton type="submit">Send Message</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
