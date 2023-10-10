import React, {FC} from 'react';
import {createSearchParams, NavLink, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Button, ButtonVariants} from "../../../components/button/Button.ts";
import SearchInput from "../../../components/searchInput/SearchInput.tsx";
import {useInput} from "../../../hooks/useInput/useInput.ts";
import MobileTopBar from "./modules/topBarr/MobileTopBar.tsx";
import {useDevice} from "../../../hooks/useDevice/useDevice.ts";
import {BiSearch} from "react-icons/bi";
import styled from "styled-components";

const Navigation:FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const searchInput = useInput('')
    const [, setParams] = useSearchParams()
    const {isMobile} = useDevice()
    const search = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        if (location.pathname !== '/search' && e.key === 'Enter'){
            navigate(`/search?q=${searchInput.value}`)
        } else if(e.key === 'Enter' ){
            setParams(createSearchParams({q: searchInput.value}))
        }
    }
    return (
        <Header>
            {isMobile && <MobileTopBar/>}
            <HeaderNav>
                <Side >
                    <NavLink to={'/'}>
                        <h2>Revista</h2>
                    </NavLink>
                    {!isMobile && <SearchInput
                        value={searchInput.value}
                        onChange={searchInput.onChange}
                        setValue={searchInput.setValue}
                        onPressEnter={search}
                        placeholder={'Explore stories'}
                    />}
                </Side>
                <Side >
                    <Nav >
                        {
                            isMobile
                                ? <Button
                                    to={'/search'}
                                    variant={ButtonVariants.icon}
                                    ><BiSearch/></Button>
                                : <>
                                    <Button
                                        to={'auth/register'}
                                        variant={ButtonVariants.fillAccent}
                                    >Sign in</Button>

                                    <Button
                                        to={'auth/login'}
                                    >Sign up</Button>
                                </>
                        }
                    </Nav>
                </Side>
            </HeaderNav>
        </Header>
    );
};

export default Navigation;


const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr ;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 99;
`
const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
`
const Side = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Nav  = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`