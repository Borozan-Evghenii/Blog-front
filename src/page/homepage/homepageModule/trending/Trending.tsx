import {FC} from 'react';
import {DefaultContainer, Section} from "../../../../styles/GlobalComponents.ts";
import styled from "styled-components";
import TrendingListItem from "./tredingListItem/TrendingListItem.tsx";
import {BiTrendingUp} from "react-icons/bi";

const Trending:FC = () => {
    return (
        <Section $border>
            <DefaultContainer>
                <SectionTitle>
                    <BiTrendingUp/>
                    <p>Trending on Revista</p>
                </SectionTitle>
                <ContentGroup>
                    <TrendingListItem/>
                    <TrendingListItem/>
                    <TrendingListItem/>
                    <TrendingListItem/>
                    <TrendingListItem/>
                    <TrendingListItem/>
                </ContentGroup>
            </DefaultContainer>
        </Section>
    );
};

export default Trending;



const SectionTitle = styled.h4`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  p{
    font-family: 'Syne', sans-serif; 
  }
  svg{
    font-size: 24px;
  }
`

const ContentGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 24px;
  @media (max-width: 768px){
    grid-template-columns: repeat(auto-fill, minmax(300px , 1fr));
  }
`