import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 40px;

    background-color: #F15806;
`;

const Container = styled.div`
    color: white;

    margin: 0 auto;
    max-width: 980px;
    padding: 0 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 17px;
    font-weight: bold;
`;

const LoggedInAs = styled.div`
    font-weight: bold;
    font-size: 14px;
`;

const LoggedInAsUser = styled.span `
    font-weight: normal;
`

export default () => (
    <Header>
        <Container>
            <Title>DiscoverAcro</Title>

            <LoggedInAs>
                Logged In As:&nbsp;
                <LoggedInAsUser>
                    Toli Zaslavskiy
                </LoggedInAsUser>
            </LoggedInAs>
        </Container>
    </Header>
);
