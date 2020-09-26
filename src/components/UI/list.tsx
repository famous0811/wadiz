import React, { useState } from "react";
import styled, { css } from "styled-components";
import color from "../../constants/color";

interface listporops {
  full?: boolean;
  children?: React.ReactNode;
}
function List({ full, children }: listporops) {
  const [onclick, setonclick] = useState(false);

  return (
    <Wrap state={onclick}>
      <div>
        <img src="" alt="" />
      </div>
      <Article full>{children}</Article>
    </Wrap>
  );
}
interface wraprops {
  state: boolean;
}
const Wrap = styled.div<wraprops>`
  color: ${color.primary2};
  & > div {
    ${({ state }) => state && css``}
  }
  & > article {
    display: none;
    ${({ state }) => state && css``}
  }
`;
const Article = styled.article<{ full?: boolean }>`
  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
  transform:height;
  display: block;
  box-sizing: border-box;
`;
export default List;
