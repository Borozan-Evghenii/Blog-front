import {FC} from 'react';
import {Button, ButtonSizeVariants, ButtonVariants} from "../../../../../components/button/Button.ts";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MobileTopBar:FC = () => {
    return (

            <TopBar>
                <Link to={'/app'} style={{fontSize: '12px'}}>Open in App</Link>
                <ButtonGroup>
                    <Button
                        to={'auth/login'}
                        variant={ButtonVariants.fillAccent}
                        size={ButtonSizeVariants.small}
                    >Sign In </Button>
                    <Button
                        size={ButtonSizeVariants.small}
                        to={'auth/register'}
                    >Sign Up</Button>
                </ButtonGroup>
            </TopBar>

    );
};

export default MobileTopBar;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0 0 5px 0;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`