import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export enum ButtonVariants {
    outline = 'Outline',
    fillAccent = 'FillAccent',
    fillDefault = 'FillDefault',
    icon = `Icon`,
    iconFill = `IconFill`,
}
export enum ButtonSizeVariants {
    small = 'Small',
    big = 'Big',
}

interface Button {
    variant?:ButtonVariants
    size?:ButtonSizeVariants
}

export const Button = styled(Link)<Button>`
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius:${props => props.theme.borderRadius};
  background-color: transparent;
  white-space: nowrap;
  line-height: 1.2;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  ${props => props.variant === ButtonVariants.icon && css`
    padding: 7px; 
    font-size: 14px;
    line-height: 0;
    svg{
      font-size: 24px;
      fill: ${props => props.theme.colors.primary};
    }
  `}

  ${props => props.variant === ButtonVariants.iconFill && css`
    padding: 7px; 
    font-size: 14px;
    line-height: 0;
    background-color: ${props => props.theme.colors.accent};
    svg{
      fill: ${props => props.theme.colors.white};
    }
  `}
  
  ${props => props.variant === ButtonVariants.fillDefault && css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    svg{
      fill: ${props => props.theme.colors.white};
    }
  `}
  ${props => props.variant === ButtonVariants.fillAccent && css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};
    svg{
      fill: ${props => props.theme.colors.white};
    }
  `}
  ${props => props.variant === ButtonVariants.outline && css`
    color: ${props => props.theme.colors.white};
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.primary};
  `}
  ${props => props.size === ButtonSizeVariants.small && css`
   padding: 0 8px 1px;
  `}
  ${props => props.size === ButtonSizeVariants.big && css`
    padding: 8px 20px;
   font-size: 16px;
  `}
`