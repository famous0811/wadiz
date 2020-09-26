import styled from "styled-components";
import colors from "../../constants/color";

interface Buttonprops {
  background?: string;
  color?: string;
}

const Button = styled.button<Buttonprops>`
  font-size: 1rem;
  display: block;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  font-weight: 550;
  padding: 0 16px;
  height: 36px;
  line-height: 34px;
  &:focus {
    outline: 0;
  }
  cursor: pointer;
  background-color: ${({ background }) => background || "white"};
  color: ${({ color }) => color || colors.primary};
  transition: color 0.5s, background-color 0.5s;
  &:hover {
    background-color: ${({ color }) => color || colors.primary};
    /* background-color: black; */
    color: ${({ background }) => background || "white"};
  }
  box-sizing: border-box !important;
`;
export default Button;
