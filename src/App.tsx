import React from 'react';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
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
`
