import React from 'react';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyleBtn as={Link} href={"#"}>LinkComponent</StyleBtn>
                <StyleBtn as="a" href={"#"}>Link</StyleBtn>
                <StyleBtn>Hello</StyleBtn>
                <SuperButton>Super Button</SuperButton>
            </Box>
        </div>
    );
}

export default App;

const StyleBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #3ffb97;
  }

  &:last-child {
    background-color: #d9213d;
  }
`
const Link = styled.a`
  color: aqua;
  font-size: 2rem;
  font-weight: bold;
  padding: 0;
  background-color: transparent;
`

const SuperButton = styled(StyleBtn)`
  border-radius: 5px;
  background-color: chartreuse;
  color: slategrey;
`

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
`

const Menu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    
    li > a {
      color: green;
    }
    
    li + li {
      margin-left: 20px;
    }
  }
`
