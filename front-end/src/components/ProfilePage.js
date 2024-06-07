// src/components/ProfilePage.js
import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProfilePage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <h1>My Profile</h1>
        <p>This is the profile page.</p>
      </PageContainer>
    </>
  );
};

export default ProfilePage;