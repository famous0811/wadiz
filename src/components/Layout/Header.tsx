import React from "react";
import styled from "styled-components";
import Headding from "../UI/Headding";
import Button from "../UI/Button";
import viewport from "../../constants/viewport";
import colors from "../../constants/color";

function Header() {
  return (
    <Wrap>
      <header>
        <div className="Header_contents">
          <Headding tag="h2" tagStyle="h3">
            wadiz
          </Headding>

          <LeftHeader className="desktop_mode">
            <ul>
              <li>
                <a href="">
                  <Headding tag="h4" tagStyle="h5">
                    펀딩하기
                  </Headding>
                </a>
              </li>
              <li>
                <a href="">
                  <Headding tag="h4" tagStyle="h5">
                    투자하기
                  </Headding>
                </a>
              </li>
              <li>
                <a href="">
                  <Headding tag="h4" tagStyle="h5">
                    스타트업 찾기
                  </Headding>
                </a>
              </li>
              <li>더보기</li>
            </ul>
          </LeftHeader>

          <div id="mobile_mode">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <RightHeader className="desktop_mode">
            <Search>
              <div>
                <input
                  type="text"
                  placeholder="어떤 프로젝트를 찾고 계신가요?"
                />
              </div>
            </Search>
            <div style={{ display: "flex" }}>
              <div
                style={{ cursor: "pointer", padding: "0 8px", color: "#60656" }}
              >
                회원가입
              </div>
              <div
                style={{ cursor: "pointer", padding: "0 8px", color: "#60656" }}
              >
                로그인
              </div>
            </div>
            <Button>프로젝트 오픈 신청</Button>
          </RightHeader>
        </div>
      </header>
    </Wrap>
  );
}
const Wrap = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  & > header {
    width: 100%;
    /* position: relative; */
    border-bottom: 1px solid #f0f2f5;
    padding: 0;
    height: 56px;
    & > .Header_contents {
      margin: 0 auto;
      padding: 0 80px;
      max-width: 1440px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      /* justify-content: space-around; */
      align-items: center;
      & > .desktop_mode {
        display: none;
        @media (min-width: ${viewport.mobile}) {
          display: flex;
        }
      }

      & > #mobile_mode {
        display: flex;
        @media (min-width: ${viewport.mobile}) {
          display: none;
        }
      }
    }
  }
`;
const LeftHeader = styled.div`
  margin-left: 24px;
  width: auto;
  & > ul {
    padding: 0px;
    display: flex;
    & > li {
      float: left;
      width: auto;
      padding: 0 16px;
    }
  }
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.div`
  min-width: 295px;
  & > div {
    border-radius: 20px;
    height: 40px;
    border: 1px solid #f0f2f5;
    background-color: #f0f2f5;
    & > input {
      padding-right: 17px;
      padding-left: 48px;
      width: 100%;
      height: 40px;
      font-weight: 400;
      line-height: 24px;
      font-size: 14px;
      background: none;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
`;

export default Header;
