import React from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';

import Card from './Card';

const renderCards = items => (
  items.map(() => (
    <Card key={uniqueId()} name="Picture" />
  ))
);

const CardList = ({ items }) => (
  <CardList.Container>
    {renderCards(items)}
  </CardList.Container>
);

CardList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  // grid-template-columns: minmax(100px, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  padding: 150px;
`;

CardList.defaultProps = {
  items: [],
};

CardList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
};

export default CardList;
