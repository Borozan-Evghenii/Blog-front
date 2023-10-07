import styled, {css} from "styled-components";

export const DefaultContainer = styled.div`
  max-width: 1200px;
  padding:  0 20px;
  margin: 0 auto;
`

export const PostContainer = styled.div`
  max-width: 680px;
  padding:  0 20px;
  margin: 0 auto;
`
export const Section = styled.section<{ $border?:boolean }>`
  padding: 40px 0 16px;
  ${props => props.$border && css`
    border-bottom: 1px solid ${props => props.theme.colors.third};
  `}
`