import React, { useState } from "react";
import styled, { css } from "styled-components";
import ConstButton from "./ConstButton";

function Index() {
  const [scrollTop, setscrollTop] = useState(window.pageYOffset);
  const [viewOn, setviewOn] = useState(false);

  window.onscroll = () => {
    if (scrollTop > window.pageYOffset) {
      setviewOn(false);
    } else {
      setviewOn(true);
    }
    setscrollTop(window.pageYOffset);
  };

  return (
    <Wrap state={viewOn}>
      <ConstButton />
      <ConstButton
        background="white"
        Click={() => {
          window.scroll({
            behavior: "smooth",
            left: 0,
            top: 0,
          });
        }}
      />
    </Wrap>
  );
}
interface wrapprops {
  state?: boolean;
}
const Wrap = styled.div<wrapprops>`
  transition: transform 0.25s, opacity 0.25s;
  position: fixed;
  right: 0;
  bottom: 0;
  ${({ state }) =>
    state &&
    css`
      transform: translateY(-68px);
      opacity: 1;
    `}
  ${({ state }) =>
    !state &&
    css`
      transform: translateY(68px);
      opacity: 0;
    `}
`;
export default Index;
