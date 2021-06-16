import React from 'react'
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <a>
                <img src="images/logo.svg" />
            </a>
            <Menu>

            </Menu>
        </Container>
      
    )
}

export default Header

const Container = styled.div`
    min-height :60px;
    position:fixed;
    padding: 20px;
    align-items:center;

`
const Menu = styled.div`
    
`