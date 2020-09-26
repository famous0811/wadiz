import React from "react";
import styled from "styled-components";
import colors from "../../constants/color";

type widthTags = "max" | "middle" | "min" | "plan" | "auto";
interface ListContentsprops {
  widthstyle?: widthTags;
  plan?: boolean;
  title: string;
  persent?: string;
  src?: string;
}

function ListContents({
  plan,
  title,
  persent,
  src,
  widthstyle = "max",
}: ListContentsprops) {
  const styles = {
    max: "calc(33.3333% - 32px)",
    middle: "calc(33.333% - 21.333px)",
    min: "calc(16.666% - 25px);",
    plan: "100%",
    auto: "auto",
  };
  if (plan)
    return (
      <Wrap width={styles[widthstyle]} style={{ maxWidth: "35%" }}>
        <img src={src} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: "14px",
            padding: "0px 12px",
            alignItems: "center",
          }}
        >
          <Plan>기획전</Plan>
          <p style={{ textOverflow: "ellipsis", whiteSpace: "normal" }}>
            {title}
          </p>
        </div>
      </Wrap>
    );
  return (
    <Wrap width={styles[widthstyle]}>
      <a href="">
        <img src={src} alt="" />
        <div style={{ height: "60px" }}>
          <Title>{title}</Title>
          <div
            style={{ display: "flex", fontSize: "14px", padding: "0px 12px" }}
          >
            <div className="persent">{persent}</div>
            <div>펀딩</div>
          </div>
        </div>
      </a>
    </Wrap>
  );
}
interface wrapprops {
  width: string;
}
const Wrap = styled.div<wrapprops>`
  display: flex;
  flex-direction: column;
  float: left;
  margin: 0 16px 16px 0;
  width: ${({ width }) => width};
  & > a > div > div > .persent {
    color: ${colors.primary};
    font-weight: 500;
  }
`;

const Plan = styled.div`
  display: flex;
  border: solid 1px rgba(0, 0, 0, 0.06);
  margin-right: 12px;
  font-size: 10px;
`;

const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export default ListContents;
