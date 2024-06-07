// src/components/CollectionPage.js
import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const CollectionPage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <h1>My Collection</h1>
        <p>This is the collection page.</p>
      </PageContainer>
    </>
  );
};

export default CollectionPage;