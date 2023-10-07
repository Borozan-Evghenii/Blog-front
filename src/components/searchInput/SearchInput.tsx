import styled from "styled-components";
import React, {Dispatch, FC, SetStateAction} from "react";
import {BiSearch} from "react-icons/bi";
import {TiDeleteOutline} from "react-icons/ti";

interface SearchInputProps{
    placeholder : string
    value: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    onPressEnter: (e:React.KeyboardEvent<HTMLInputElement>) => void
    setValue: Dispatch<SetStateAction<string>>
}
const SearchInput:FC<SearchInputProps> = ({placeholder,value, onChange,  setValue ,onPressEnter}) => {
    return (
        <Container>
            <Icon>
                <BiSearch/>
            </Icon>
           <Field
               value={value}
               onChange={(e) => onChange(e)}
               onKeyDown={onPressEnter}
               placeholder={placeholder}
           />
            <IconDelete>
                < TiDeleteOutline
                    style={{fill: `${value.length > 2 ? '#333': 'transparent' }` }}
                    onClick={() => setValue('')}
                />
            </IconDelete>
        </Container>
    );
};

export default SearchInput;


const Container = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  overflow: hidden;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-left: 12px;
  background-color: ${props => props.theme.colors.background};
  svg{
    font-size: 20px;
    opacity: .3;
  }
`

const IconDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  background-color: ${props => props.theme.colors.background};
  svg{
    font-size: 16px;
    opacity: .3;
    &:hover{
      opacity: 1;
      cursor: pointer;
    }
  }
`
const Field = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 10px 20px 10px 0;
  &::placeholder{
    font-size: 12px;
  }
`