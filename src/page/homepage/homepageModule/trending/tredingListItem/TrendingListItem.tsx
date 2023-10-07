import {FC} from 'react';
import {Link} from "react-router-dom";
import img from '../../../../../../public/vite.svg'
import styled from "styled-components";
const TrendingListItem:FC = () => {
    return (
        <Container>
            <Number>01</Number>
            <Post>
                <AuthorInfo to={''}>
                    <img src={img} alt="author logo"/>
                    <p>Damian Gil</p>
                </AuthorInfo>
                <Title to={''}>
                    <h2>Mastering Customer Segmentation with LLM</h2>
                </Title>
                <PostDetails>
                    <data className='detail_data'>Sep 26</data>
                    <span>-</span>
                    <span className='detail_toRead'> 23 min Read</span>
                </PostDetails>
            </Post>
        </Container>
    );
};

export default TrendingListItem;


const Container = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  margin-bottom: 24px;
`

const Number = styled.span`
  font-size: 32px;
  font-family: 'Syne', sans-serif;
  color: ${props => props.theme.colors.third};
`

const Post = styled.div`
  display: flex;flex-direction: column;
  gap: 10px;
`
const AuthorInfo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  img{
    width: 20px;
    height: 20px;
  }
  p{
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`
const Title = styled(Link)`
  h2{
    font-size: 16px;
    color: ${props => props.theme.colors.primary};
    font-family: 'Syne', sans-serif;
    font-weight: 600;
  }
`
const PostDetails = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  data, span {
    color: ${props => props.theme.colors.secondary};
  }
`