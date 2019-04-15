import React, { Fragment } from 'react';
import CardList from './CardList';

const Home = () => (
  <Fragment>
    <h1>Hello world</h1>
    <CardList items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
  </Fragment>
);

export default Home;
