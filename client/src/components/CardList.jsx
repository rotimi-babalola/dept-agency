import React from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';

import Card from './Card';
import Categories from './Categories';

const renderCards = items => (
  items.map(() => (
    <Card key={uniqueId()} name="Picture" />
  ))
);

const CardList = ({ items }) => (
  <CardList.Container>
    <CardList.Categories>
      <Categories />
    </CardList.Categories>
    {renderCards(items)}
  </CardList.Container>
);

CardList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  padding: 150px;

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

CardList.Categories = styled.div`
  grid-column: 1/3;
`;

CardList.defaultProps = {
  items: [],
};

CardList.propTypes = {
  items: PropTypes.array,
};

export default CardList;
