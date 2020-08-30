import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from 'components';
import { Main } from 'containers';
import { Container } from './styles';

export default function Layout({ children, isHome }) {
    return (
        <Container>
            {!isHome && <Header />}
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    );
}
Layout.propTypes = {
    children: PropTypes.element.isRequired,
    isHome: PropTypes.bool.isRequired
};

Layout.defaultProps = {
    isHome: false
}
