import {FC} from 'react';
import styled from "styled-components";
import image from '../../../../public/vite.svg'
import {Link} from "react-router-dom";
import {postType} from "../../../globalTypes/globalTypes.ts";
import {Category} from "../../category/Category.ts";


interface DefaultPostProps {
    item?: postType
}
const DefaultPost:FC<DefaultPostProps> = ({item}) => {
    const description = item
        ? item?.attributes?.description.length >= 124
            ? item?.attributes.description.substring(0, 124)
            : item?.attributes.description : ''


    return (
        <Post>
            <PostContainer>
                <AuthorContainer>
                    <AuthorLogo src={image} alt="author Logo"/>
                    <AuthorInfo>
                        <AuthorName to={''}>Daniel Rizea</AuthorName>
                    </AuthorInfo>
                </AuthorContainer>
                <PostTitle to={''}>{item?.attributes.title}</PostTitle>
                <PostDescription>
                    {description}
                </PostDescription>
                <PostFooter>
                    <Date >{item?.attributes.publishedAt}</Date>
                    <ToRead>{item?.attributes.to_read} min read</ToRead>
                    {
                        item?.attributes.categories.data.map(e =>
                            <Category
                                to={''}
                                key={e.id}
                                $postCategory>
                                {e.attributes.category_name}
                            </Category>
                        )
                    }
                </PostFooter>
            </PostContainer>
            <PostImage
                src={`http://localhost:1337${item?.attributes.image.data.attributes.url}`}
                alt={item?.attributes.image.data.attributes.alternativeText}
            />
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
  line-clamp: 2;
  overflow: hidden;
  &:after{
    content: '..';
  }
  @media(max-width: 731px){
    display: none;
  }
`
const PostFooter = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;
  align-items: center;
  flex-wrap: wrap;
`
const Date = styled.p`
  
`

const ToRead = styled.p`

`