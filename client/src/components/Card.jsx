import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ name, image }) => (
  <Card.Container>
    <img style={{ width: '100%' }} src="../../../client/Images/arla.png" alt={name} />
    <Card.Content>
      <p>KEMPEN</p>
      <h3 style={{ fontFamily: 'Teko', fontWeight: 'normal' }}>A summer island in the Netherlands</h3>
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

// Card.Subtitle = styled.p`

// `;

Card.Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
