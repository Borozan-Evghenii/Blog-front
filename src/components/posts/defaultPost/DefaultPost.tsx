import {FC} from 'react';
import styled from "styled-components";
import image from '../../../../public/vite.svg'
import postImage from '../../../../public/image.jpeg'
import {Link} from "react-router-dom";

interface DefaultPostProps {
    item?: string
}
const DefaultPost:FC<DefaultPostProps> = ({item}) => {
    console.log(item)
    return (
        <Post>
            <PostContainer>
                <AuthorContainer>
                    <AuthorLogo src={image} alt="author Logo"/>
                    <AuthorInfo>
                        <AuthorName to={''}>Daniel Rizea</AuthorName>
                    </AuthorInfo>
                </AuthorContainer>
                <PostTitle to={''}>5 Lessons on Career Growth From a Google Exec</PostTitle>
                <PostDescription>There is no easy path. The elevator is broken and you need to take the stairs and climb fast.</PostDescription>
            </PostContainer>
            <PostImage src={postImage}  />
        </Post>
    );
};

export default DefaultPost;

const Post = styled.div`
  display: grid;
  grid-template-columns: 1fr .5fr;
  column-gap: 48px  ;
  align-items: center;
  @media(max-width: 425px){
    column-gap: 18px;
  }
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
`
const PostImage = styled.img`
    max-width: 100%;
`

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const AuthorLogo = styled.img`
  width: 20px;
  height: 20px;
  overflow: hidden;
`
const AuthorName = styled(Link)`
  font-size: 13px;
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${props => props.theme.colors.primary};
`

const PostTitle = styled(Link)`
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-family: 'Syne', sans-serif;
  @media(max-width: 731px){
    font-size: 16px;
  }
`

const PostDescription = styled.div`
  color: ${props => props.theme.colors.secondary};
  @media(max-width: 731px){
    display: none;
  }
`