import {FC} from 'react';
import {Button, ButtonSizeVariants, ButtonVariants} from "../../../../components/button/Button.ts";
import styled from "styled-components";
import {DefaultContainer} from "../../../../styles/GlobalComponents.ts";

const Hero:FC = () => {

    return (
        <Section>
            <DefaultContainer>
                <Container>
                    <ContentGroup>
                        <Title>Stay curious.</Title>
                        <Description>Discover stories, thinking, and expertise from writers on any topic.</Description>
                        <Button to={'auth/register'} size={ButtonSizeVariants.big} variant={ButtonVariants.fillDefault}>Start Reading</Button>
                    </ContentGroup>
                </Container>
            </DefaultContainer>
        </Section>
    );
};

export default Hero;

const Section = styled.section`
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  background-color: #fec016;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 170px 0 ;
`

const Title = styled.h2`
  font-size: clamp(48px, 20vw, 106px);
  color: ${props => props.theme.colors.primary};
  font-family: 'Syne', sans-serif;
`

const Description = styled.p`
  font-size: 24px;
  max-width: 550px;
`
const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`