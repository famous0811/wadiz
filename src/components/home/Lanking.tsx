import React from "react";
import styled from "styled-components";
import Headding from "../UI/Headding";
import colors from "../../constants/color";

interface LankingItemProps {
  keynumber?: string;
  title: string;
  persent?: string;
  categorize?: string;
  src?: string;
  list?: boolean;
}
function Lanking_Item({
  keynumber,
  title,
  persent,
  categorize,
  src,
  list,
}: LankingItemProps) {
  return (
    <Wrap
      style={{
        marginBottom: "16px",
        marginLeft: list ? "0px" : "60px",
        flexDirection: "column",
      }}
    >
      <Wrap>
        <h1 style={{ margin: "0px 10px 0px 0px" }}>{keynumber}</h1>
        <div style={{ maxWidth: "250px" }}>
          <Title>{title}</Title>
          <div style={{ display: "flex", fontSize: "13px" }}>
            <b style={{ color: colors.primary, marginRight: "10px" }}>
              {persent}
            </b>
            <div style={{ color: colors.primary2 }}>{categorize}</div>
          </div>
        </div>
        <div style={{ width: "93px", height: "66px", background: "black" }}>
          <img src="" alt="" />
        </div>
      </Wrap>
    </Wrap>
  );
}

interface Lankingprops {
  funding?: boolean;
  invest?: boolean;
}
function Lanking({ funding, invest }: Lankingprops) {
  if (funding)
    return (
      <Wrap style={{ flexDirection: "column" }}>
        <Lanking_Item
          keynumber="1"
          title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
          persent="3,300%"
          categorize="게임·취미"
        />
        <Lanking_Item
          keynumber="2"
          title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
          persent="3,300%"
          categorize="게임·취미"
        />
        <Lanking_Item
          keynumber="3"
          title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
          persent="3,300%"
          categorize="게임·취미"
        />
        <Lanking_Item
          keynumber="4"
          title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
          persent="3,300%"
          categorize="게임·취미"
        />
        <Lanking_Item
          keynumber="5"
          title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
          persent="3,300%"
          categorize="게임·취미"
        />
      </Wrap>
    );

  if (invest) return <Wrap></Wrap>;
  else return <></>;
}
const Wrap = styled.div`
  display: flex;
`;
const Title = styled.p`
  overflow: hidden;
  margin: 0;
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-weight: 400;
`;

const Photo = styled.span<{ img: string }>`
  width: 100%;
  height: 100%;
  background: no-repeat 50% / cover border-box;
  background-image: url({img});
`;

const PFrame = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  overflow: hidden;
  width: 93px;
  height: 66px;
`;

export default Lanking;
export const LankingItem = Lanking_Item;
