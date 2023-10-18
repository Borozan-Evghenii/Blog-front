import {FC} from 'react';
import Trending from "./homepageModule/trending/Trending.tsx";
import DiscoverPosts from "./homepageModule/discoverPosts/DiscoverPosts.tsx";
import {useFetch} from "../../hooks/useFetch/useFetch.ts";
import styled from "styled-components";
import {DefaultContainer} from "../../styles/GlobalComponents.ts";
import {Button, ButtonSizeVariants, ButtonVariants} from "../../components/button/Button.ts";
import {useAppSelector} from "../../store/hooks.ts";

const HomePage: FC= () => {
    const language = useAppSelector(state => state.language.value)
    const {data} = useFetch(`http://localhost:1337/api/homepage?locale=${language}`)

    return (
        <main>
            <Section>
                <DefaultContainer>
                    <Container>
                        <ContentGroup>
                            <Title>{data?.attributes.heroTitle}</Title>
                            <Description>{data?.attributes.heroDescription}</Description>
                            <Button
                                to={'auth/register'}
                                size={ButtonSizeVariants.big}
                                variant={ButtonVariants.fillDefault}
                            >{data?.attributes.heroButtonText}</Button>
                        </ContentGroup>
                    </Container>
                </DefaultContainer>
            </Section>
            <Trending/>
            <DiscoverPosts/>
        </main>
    );
};

export default HomePage;

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