import {FC} from "react";
import {DefaultContainer, Section} from "../../../../styles/GlobalComponents.ts";
import styled from "styled-components";
import List from "../../../../components/list/List.tsx";
import DefaultPost from "../../../../components/posts/defaultPost/DefaultPost.tsx";

const DiscoverPosts:FC = () => {
    return (
        <Section>
            <DefaultContainer>
                <Layout>
                    <ListSection>
                        <List
                            items={['post1', 'post2', 'post3',  'post3',  'post3', 'post3']}
                            element={(item) => <DefaultPost item={item}/> }
                        />
                    </ListSection>
                    <Aside>
                        right
                    </Aside>

                </Layout>

            </DefaultContainer>
        </Section>
    );
};

export default DiscoverPosts;


const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(8 ,1fr) repeat(4, minmax(48px, 1fr));
  
  @media(max-width: 900px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

const ListSection = styled.section`
  grid-column: 1/ span 7;
  @media(max-width: 900px){
    grid-row-start: 2;
    grid-column: auto ;
  }
`
const Aside = styled.aside`
  position: sticky;
  top: 120px;
  grid-column: 9 / span 4;
  @media(max-width: 900px){
    position: initial;
    grid-row-start: 1;
    grid-column: auto ;
  }
`