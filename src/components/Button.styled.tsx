import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyleBtn = styled.button`
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

export const SuperButton = styled(StyleBtn)`
  border-radius: 5px;
  background-color: chartreuse;
  color: slategrey;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
`
