import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyleBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${props => props.color || "#fb3f78"};
  padding: 10px 20px;
  color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  border-radius: 10px;


  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
    background-color: transparent;

    &:hover {
      border-color: #3ffb97;
      color: #3ffb97;
      background-color: transparent;
    }
  `}
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;

    &:hover {
      background-color: #3ffb97;
    }
  `}

  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
  `}
`

