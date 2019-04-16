import React, { Fragment } from 'react';
import styled from 'styled-components';
import CardList from './CardList';
import Header from './Header';

const Home = () => (
  <Fragment>
    <Header.Container>
      <Header />
    </Header.Container>
    <CardList items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
  </Fragment>
);

Header.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
