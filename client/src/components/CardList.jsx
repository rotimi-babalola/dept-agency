import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';

const renderCards = items => (
  items.map(() => (
    <Card />
  ))
);

const CardList = ({ items }) => (
  <CardList.Container>
    {renderCards(items)}
  </CardList.Container>
);

CardList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding: 40px;
`;

CardList.defaultProps = {
  items: [],
};

CardList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
};

export default CardList;
