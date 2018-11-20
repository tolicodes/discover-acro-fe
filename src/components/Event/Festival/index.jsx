import React from 'react';
import styled from 'styled-components';
import NavButton from '../../common/NavButton';
import { Title } from '../../common/Typography';

import Header from '../../Header';
import Schedule from './Schedule';

const FestivalContainer = styled.div`
    margin: 0 auto;
    width: 980px;
`;

const NavButtons = styled.div`
    margin-top: 13px;
    margin-bottom: 13px; 
    display: flex;
    justify-content: space-between;
`;

const StyledNavButton = styled(NavButton)``;

const BuyTicketsButton = styled(NavButton)`
    margin-top: 10px;
`;

const HeroContainer = styled.div`
    position: absolute;
    left: 0;
    height: 375px;
    width: 100%;
    overflow-y: hidden;
`;

const HeroImg = styled.img`
    width: 100%;
`;

const HeroOverlay = styled.div`
    position: absolute;
    bottom: 0;
    height: 195px;
    width: 100%;
    background: linear-gradient(180deg, rgba(255,255,255,0) 3.18%, rgba(255,255,255,0.4) 28.76%, rgba(255,255,255,0.89) 100%);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
`;

export default () => (
    <div>
        <Header/>

        <FestivalContainer>
            <NavButtons>
                <StyledNavButton>
                    SCHEDULE
                </StyledNavButton>

                <StyledNavButton>
                    TICKETS
                </StyledNavButton>

                <StyledNavButton>
                    MAILING LIST
                </StyledNavButton>

                <StyledNavButton>
                    VISION
                </StyledNavButton>

                <StyledNavButton>
                    SHOP
                </StyledNavButton>
            </NavButtons>

            <HeroContainer>
                <HeroImg
                    alt="Hero Image"
                    src="/events/ny-acro-fest/img/hero.png"
                />
                <HeroOverlay>
                    <Title>New York Acro Fest 2019</Title>
                    <div>350 Moffat St, Brooklyn NY 11237</div>
                    <div>August 10 - August 13</div>

                    <BuyTicketsButton>
                        Buy Tickets
                    </BuyTicketsButton>
                </HeroOverlay>
            </HeroContainer>

            <Schedule />
        </FestivalContainer>
    </div>

)