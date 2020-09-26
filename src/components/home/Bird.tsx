import React from "react";
import styled, { css } from "styled-components";
import colors from "../../constants/color";
interface Birdprops {
  children?: React.ReactNode;
  src?: string;
  bottom?: boolean;
  bottomtitle?: string;
}
function Bird({ children, src, bottom, bottomtitle }: Birdprops) {
  return (
    <Wrap>
      <img src={src} alt="" />
      <article>{children}</article>
      <Bottom state={bottom}>{bottomtitle}</Bottom>
    </Wrap>
  );
}
const Wrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  & > article {
    padding: 0 16px 6px;
  }
`;

const Bottom = styled.div<{ state?: boolean }>`
  display:none;
  ${({ state }) =>
    state &&
    css`
      cursor: pointer;
      font-size: 15px;
      font-weight: 400;
      line-height: 36px;
      display: block;
      text-align: center;
      width: 100%;
      color: ${colors.primary2};
    `}}
  
`;

export default Bird;
