import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Main({ children }) {
  return (
    <Container>
        {children}
    </Container>
  );
}

Main.propTypes = {
  //children: PropTypes.element.isRequired,
};
