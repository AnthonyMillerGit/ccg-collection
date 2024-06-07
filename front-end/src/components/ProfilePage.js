// src/components/ProfilePage.js
import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 40px;
  background-color: #FDFFE2;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <SignUpForm />
      <LoginForm />
    </ProfileContainer>
  );
};

export default ProfilePage;