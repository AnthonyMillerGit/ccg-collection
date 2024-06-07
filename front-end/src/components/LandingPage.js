// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 50vh;
  background: url('/images/CCG-landing-page.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
`;

const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
`;

const Feature = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
`;

const FeatureTitle = styled.h3`
  margin: 0 0 10px;
`;

const FeatureDescription = styled.p`
  margin: 0;
`;

const TestimonialsSection = styled.div`
  background-color: #333;
  color: white;
  padding: 40px 20px;
`;

const Testimonial = styled.div`
  max-width: 600px;
  margin: 0 auto 20px;
  text-align: left;
`;

const TestimonialQuote = styled.p`
  font-style: italic;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  text-align: right;
`;

const CallToAction = styled.div`
  margin: 40px 0;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate('/cards');
  };

  return (
    <>
      <Header />
      <LandingContainer>
        <HeroSection>
          <HeroTitle>Welcome to Card Collection</HeroTitle>
          <HeroSubtitle>Discover and collect your favorite cards</HeroSubtitle>
        </HeroSection>
        <FeaturesSection>
          <Feature>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Browse Collections</FeatureTitle>
            <FeatureDescription>Explore a vast collection of old and rare cards from various games.</FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon>🗃️</FeatureIcon>
            <FeatureTitle>Manage Your Collection</FeatureTitle>
            <FeatureDescription>Keep track of your collection, add new cards, and organize them.</FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureTitle>Join the Community</FeatureTitle>
            <FeatureDescription>Connect with other collectors and share your passion.</FeatureDescription>
          </Feature>
        </FeaturesSection>
        <TestimonialsSection>
          <Testimonial>
            <TestimonialQuote>"This site has the best collection of old and rare cards. A must for any serious collector!"</TestimonialQuote>
            <TestimonialAuthor>- Jane Doe</TestimonialAuthor>
          </Testimonial>
          <Testimonial>
            <TestimonialQuote>"I found so many rare cards I thought I'd never see again. Highly recommend!"</TestimonialQuote>
            <TestimonialAuthor>- John Smith</TestimonialAuthor>
          </Testimonial>
        </TestimonialsSection>
        <CallToAction>
          <CTAButton onClick={handleExploreNow}>Explore Now</CTAButton>
        </CallToAction>
      </LandingContainer>
    </>
  );
};

export default LandingPage;