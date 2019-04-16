import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ name }) => (
  <Card.Container>
    <img style={{ width: '100%' }} src="../../../client/Images/arla.png" alt={name} />
    <Card.Content>
      <p>KEMPEN</p>
      <Card.Title>A summer island in the Netherlands</Card.Title>
    </Card.Content>
  </Card.Container>
);

Card.Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  &:hover {
    cursor: pointer;
  }
`;

Card.Title = styled.h3`
  font-family: 'Teko';
  font-weight: normal;
`;

Card.Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`;

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
