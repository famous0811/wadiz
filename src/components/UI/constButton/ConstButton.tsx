import React from "react";
import styled from "styled-components";
import colors from "../../../constants/color";

interface Buttonprops {
  Click?: () => void;
  background?: string;
}
function ConstButton({ Click, background }: Buttonprops) {
  return <Wrap Bstate={background} onClick={Click} />;
}
interface wrapprops {
  Bstate?: string;
}
const Wrap = styled.div<wrapprops>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgb(144, 148, 156);
  background: ${({ Bstate }) => Bstate || colors.black};
  &:hover {
    border-color: black;
  }
`;
export default ConstButton;
