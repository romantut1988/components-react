import React from 'react';
import styled from "styled-components";
import {StyleBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";

function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyleBtn color={"red"}>Hello</StyleBtn>*/}
                {/*<StyleBtn color={"green"} fontSize={"20px"}>Hello</StyleBtn>*/}
                {/*<StyleBtn fontSize={"30px"}>Hello</StyleBtn>*/}

                <StyleBtn btnType={"primary"} active>Hello</StyleBtn>
                <StyleBtn btnType={"outlined"}>Hello</StyleBtn>
            </Box>
        </div>
    );
}

export default App;


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

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

`


