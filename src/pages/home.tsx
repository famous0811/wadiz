import React from "react";
import styled from "styled-components";
import "../styles/styled.scss";

import colors from "../constants/color";
import viewport from "../constants/viewport";
import images from "../assets/images";

import Headding from "../components/UI/Headding";
import Navgation from "../components/UI/constButton";
import Layout from "../components/Layout";
import Slicke from "../components/UI/slicke";
import Button from "../components/UI/Button";
import ListContents from "../components/home/ListContents";
import Lanking, { LankingItem } from "../components/home/Lanking";
import Bird from "../components/home/Bird";

function Home() {
  // console.log(window.innerWidth);
  // console.log();
  return (
    <Layout title="와디즈">
      <Navgation />
      <Wrap>
        <Slicke />
        <Body>
          <div id="recommendation">
            <div>
              <Headding tag="h5" tagStyle="h4">
                이 프로젝트 어때요?
              </Headding>
              <div style={{ display: "flex", flexFlow: "row wrap" }}>
                <ListContents
                  title="3 in 2 멀티 충전 케이블에 응급배터리까지 모두 하나로 !"
                  persent="249%"
                />
                <ListContents
                  title="[한정수량] 취미는 청소, 특기는 귀여움. 아이클레보 라이언 로봇청소기"
                  persent="4,403%"
                />
                <ListContents
                  title="[앵콜] 고속 충전 기능에 패션을 더하다!  웨어러블 케이블, 닐스2.0"
                  persent="279%"
                />
                <ListContents
                  title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                  persent="2,290%"
                />
                <ListContents
                  widthstyle="plan"
                  plan
                  title="직접 체험하고 펀딩하기"
                />
              </div>
            </div>
            <div>
              <Headding tag="h2" tagStyle="h3">
                실시간 랭킹
              </Headding>
              <div id="lanking">
                <div
                  id="lanking_nav"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>펀딩하기</div>
                    <div style={{ marginRight: "10px" }}>투자하기</div>
                  </div>
                  <div>?</div>
                </div>
                <Lanking funding />
              </div>
            </div>
          </div>
          <WrapItem>
            <b style={{ display: "flex" }}>
              회원님이 <div style={{ color: colors.primary }}>좋아할</div>{" "}
              프로젝트
            </b>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListContents
                widthstyle="min"
                title="[냥치혁명] 집사vs고양이, 양치전쟁에 종지부를 찍다! '캣즐'"
                persent="4251%"
              />
              <ListContents
                widthstyle="min"
                title="터치패드 퓨전 키보드 - 모키보 (화이트 스페셜 에디션)"
                persent="848%"
              />
              <ListContents
                widthstyle="min"
                title="니트/코트의 계절이 왔다ㅣ세탁소에서도 인정한 성능부터 다른 찐 보풀제거기"
                persent="2,212%"
              />
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
              <ListContents
                widthstyle="plan"
                plan
                title="완벽한 홈캉스를 위해"
              />
            </div>
          </WrapItem>

          <WrapItem id="body_earlyBird">
            <Headding tag="h4" tagStyle="h3">
              얼리버드
            </Headding>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Explanation>
                먼저 참여하는 분들께 드리는 얼리버드 혜택
              </Explanation>
              <div style={{ display: "flex" }}>
                <div>&lt;</div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <div>&gt;</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Bird bottom bottomtitle="지금참여하기 >">
                <img src="" alt="" />
                <div style={{ fontSize: "13px", color: colors.primary2 }}>
                  펀딩
                </div>
                <b>반려견과 함께 누울 수 있는 [개편한형제 교감배개]</b>
                <div style={{ display: "flex", fontSize: "13px" }}>
                  <b style={{ color: colors.primary, marginRight: "10px" }}>
                    296%
                  </b>
                  <div style={{ color: colors.primary2 }}>반려동물</div>
                </div>
                <Bird>
                  <div style={{ fontSize: "13px" }}>
                    <b>개편한형제[교감베개]</b>
                    <div style={{ height: "36px" }}>
                      구성품 : 교감베개 + 기본방수커버
                    </div>
                    <b>67,900원</b>
                  </div>
                </Bird>
              </Bird>
              <Bird bottom bottomtitle="지금참여하기 >">
                <img src="" alt="" />
                <div style={{ fontSize: "13px", color: colors.primary2 }}>
                  펀딩
                </div>
                <b>반려견과 함께 누울 수 있는 [개편한형제 교감배개]</b>
                <div style={{ display: "flex", fontSize: "13px" }}>
                  <b style={{ color: colors.primary, marginRight: "10px" }}>
                    296%
                  </b>
                  <div style={{ color: colors.primary2 }}>반려동물</div>
                </div>
                <Bird>
                  <div style={{ fontSize: "13px" }}>
                    <b>개편한형제[교감베개]</b>
                    <div style={{ height: "36px" }}>
                      구성품 : 교감베개 + 기본방수커버
                    </div>
                    <b>67,900원</b>
                  </div>
                </Bird>
              </Bird>
              <Bird bottom bottomtitle="지금참여하기 >">
                <img src="" alt="" />
                <div style={{ fontSize: "13px", color: colors.primary2 }}>
                  펀딩
                </div>
                <b>반려견과 함께 누울 수 있는 [개편한형제 교감배개]</b>
                <div style={{ display: "flex", fontSize: "13px" }}>
                  <b style={{ color: colors.primary, marginRight: "10px" }}>
                    296%
                  </b>
                  <div style={{ color: colors.primary2 }}>반려동물</div>
                </div>
                <Bird>
                  <div style={{ fontSize: "13px" }}>
                    <b>개편한형제[교감베개]</b>
                    <div style={{ height: "36px" }}>
                      구성품 : 교감베개 + 기본방수커버
                    </div>
                    <b>67,900원</b>
                  </div>
                </Bird>
              </Bird>
            </div>
          </WrapItem>

          <WrapItem id="body_planning">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Headding tag="h4" tagStyle="h3">
                기획전
              </Headding>
              <div style={{ display: "flex" }}>
                <div>&lt;</div>
                <button>1</button>
                <div>&gt;</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Bird bottom bottomtitle="더보기 >">
                <div style={{ margin: "30px 0px" }}>
                  <Headding tag="h6" tagStyle="h5">
                    오직 와디즈에서만! 앵콜펀딩 모음
                  </Headding>
                </div>
                <ul>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                </ul>
              </Bird>
              <Bird bottom bottomtitle="더보기 >">
                <div style={{ margin: "30px 0px" }}>
                  <Headding tag="h6" tagStyle="h5">
                    오직 와디즈에서만! 앵콜펀딩 모음
                  </Headding>
                </div>
                <ul>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                </ul>
              </Bird>
              <Bird bottom bottomtitle="더보기 >">
                <div style={{ margin: "30px 0px" }}>
                  <Headding tag="h6" tagStyle="h5">
                    오직 와디즈에서만! 앵콜펀딩 모음
                  </Headding>
                </div>
                <ul>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                  <li>
                    <LankingItem
                      list
                      title="더지니어스 흑과백, 보드게임으로 재탄생! 쉽고 빠르지만 가슴쫄깃한 구룡투"
                      persent="3,300%"
                      categorize="게임·취미"
                    />
                  </li>
                </ul>
              </Bird>
            </div>
          </WrapItem>

          <WrapItem id="body_trend">
            <Headding tag="h4" tagStyle="h3">
              트렌드
            </Headding>
            <TrandItem>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", marginBottom: "12px" }}>
                  <b style={{ color: colors.primary, marginRight: "3px" }}>
                    #급상승
                  </b>

                  <b>프로젝트</b>
                </div>
                <div style={{ paddingRight: "30px" }}>?</div>
              </div>

              <ul>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
              </ul>
            </TrandItem>
            <TrandItem>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", marginBottom: "12px" }}>
                  <b>오늘 가장 많은 사람들이</b>
                  <b style={{ color: colors.primary, margin: "0 3px" }}>
                    #좋아한
                  </b>

                  <b>프로젝트</b>
                </div>
                <div style={{ paddingRight: "30px" }}>?</div>
              </div>

              <ul>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
              </ul>
            </TrandItem>
            <TrandItem>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", marginBottom: "12px" }}>
                  <b>오늘 가장 많은 사람들이</b>
                  <b style={{ color: colors.primary, margin: "0 3px" }}>
                    #지지서명한
                  </b>

                  <b>프로젝트</b>
                </div>
                <div style={{ paddingRight: "30px" }}>?</div>
              </div>

              <ul>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
                <li>
                  <ListContents
                    widthstyle="auto"
                    title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                    persent="2,466%"
                  />
                </li>
              </ul>
            </TrandItem>
          </WrapItem>

          <WrapItem
            style={{
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Headding tag="h4" tagStyle="h3">
                주목하세요! 오늘 오픈한 프로젝트
              </Headding>
              <div style={{ display: "flex" }}>
                <div>&lt;</div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <div>&gt;</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
              <ListContents
                widthstyle="min"
                title="흡-착! 무선 보조배터리 끝판왕 | 어느것 하나 놓치지 않았어요. R5"
                persent="2,466%"
              />
            </div>
          </WrapItem>

          <WadizNews>
            <div className="WadizNewsItem">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "343px",
                }}
              >
                <div className="emphasis" style={{ marginBottom: "15px" }}>
                  팔로잉 친구들로부터 멋진 프로젝트를 찾아보세요
                </div>
                <div style={{ display: "flex" }}>
                  <WadizNewsItem_Users />
                  <WadizNewsItem_Users />
                  <WadizNewsItem_Users />
                  <WadizNewsItem_Users />
                  <WadizNewsItem_Users style={{ marginRight: "30px" }} />
                  <Button background={colors.primary} color={colors.white}>
                    팔로우 할만한 사람 찾기
                  </Button>
                </div>
              </div>
            </div>

            <div className="WadizNewsItem">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "60px" }}>
                  <Headding tag="h1" tagStyle="h4">
                    와디즈 소식
                  </Headding>
                </div>
                <div id="WadizNews_newcontents" style={{ display: "flex" }}>
                  <a href="https://www.wadiz.kr/web/wboard/newsBoardDetail/7444?headWordId=38&cPage=1&_refer_section_st=MNB_1">
                    <div>보도자료</div>
                    <div className="emphasis">
                      와디즈 창업 중소기업 지원을 위해 신용보증기금과 맞손
                    </div>
                    <div>와디즈 소식</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="WadizNewsItem">
              <div style={{ maxWidth: "1440px", display: "block" }}>
                <a
                  href="https://www.wadiz.kr/web/wsub/openfunding"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "82px 0 40px",
                    backgroundColor: colors.primary,
                  }}
                >
                  <Headding tag="h4" tagStyle="h3">
                    와디즈에서 프로젝트 오픈하기
                  </Headding>
                  <div>
                    당신의 이야기를 소개하고 투자자와 서포터를 만나보세요
                  </div>
                  <Button background={colors.primary} color={colors.white}>
                    바로가기{" "}
                  </Button>
                </a>
              </div>
            </div>
          </WadizNews>
        </Body>

        <Footer>
          <div id="footer_menu">
            <div>
              <ul>
                <li>
                  <a href="">회원가입약관</a>
                </li>
                <li>서비스이용약관</li>
                <li className="emphasis">
                  <a href="">개인정보처리방침</a>
                </li>
                <li>운영정책</li>
                <li>제휴문의</li>
                <li>
                  <a href="">공지사항</a>
                </li>
                <li>
                  <a href="">인재채용</a>
                </li>
                <li>SNS</li>
              </ul>
            </div>
          </div>

          <div id="footer_contents">
            <div id="footer_contents_communication">
              <div className="emphasis">와디즈 대표 고객센터</div>
              <ul>
                <li className="emphasis">1661-9056</li>
                <li>
                  <a href="https://pf.kakao.com/_pEeEl" target="_blank">
                    카카오톡 채널@와디즈
                  </a>
                </li>
                <li>
                  <a href="mailto:info@wadiz.kr">info@wadiz.kr</a>
                </li>
                <li>W9 멤버십 고객센터 1811-9090</li>
              </ul>
            </div>

            <div id="footer_contents_introduce">
              <ul>
                <li>와디즈플랫폼 (주)</li>
                <li>대표이사 최동철</li>
                <li>사업자등록번호 220-88-37661</li>
                <li>
                  경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 A동
                  4층 402호
                </li>
              </ul>
              <div className="emphasis" style={{ fontSize: "14px" }}>
                © WADIZ Platform Co., Ltd.
              </div>
            </div>
            <div id="footer_contents_download">
              <a href="https://itunes.apple.com/kr/app/wadijeu/id1107828621">
                iOS 앱
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.markmount.wadiz">
                안드로이드 앱
              </a>
            </div>
          </div>

          <div id="footer3">
            <div>
              <span
                style={{
                  color: "#babdc0",
                  fontWeight: 700,
                  display: "inline-block",
                  marginRight: "8px",
                }}
              >
                투자위험고지
              </span>
              비상장기업 투자는 원금 손실 가능성이 크니
              <div style={{ textDecoration: "underline" }}>투자위험안내</div>를
              꼭 확인하세요.
            </div>
          </div>
        </Footer>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  & > #recommendation {
    margin: 0 auto;
    padding: 40px 80px;
    display: flex;
    border: solid 1px rgba(0, 0, 0, 0.06);
    & > div:first-child {
      padding-right: 60px;
    }
    & > div:last-child {
      display: flex;
      flex-direction: column;
      border-left: solid 1px rgba(0, 0, 0, 0.06);
      min-width: 427px;
      max-width: 427px;
    }
  }
`;
const Explanation = styled.p`
  color: rgba(0, 0, 0, 0.84);
`;
const Footer = styled.div`
  & > #footer_menu {
    border: 1px solid #e6eaed;
    & > div {
      margin: 8px auto;
      padding: 0 80px;
      max-width: 1440px;
      & > ul {
        display: flex;
        & > li {
          float: left;
          width: auto;
          margin-right: 32px;
        }
      }
    }
  }
  & > #footer_contents {
    margin: 0 auto;
    padding: 0px 80px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    & > #footer_contents_communication {
      display: flex;
      flex-direction: column;
      padding: 32px 0px;
      margin-right: 80px;
      & > ul {
        display: flex;
        li {
          float: left;
          width: auto;
          font-size: 12px;
          &::after {
            margin: 0 5px;
            border-left: 2px solid #e6eaed;
            content: "";
          }
        }
        li:last-child {
          float: left;
          width: auto;
          &::after {
            content: none;
          }
        }
      }
    }
    & > #footer_contents_introduce {
      padding: 32px 0px;
      display: flex;
      /* margin-right: 20px; */
      flex-direction: column;
      & > ul {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        li {
          float: left;
          width: auto;
          font-size: 12px;
          &::after {
            margin: 0 5px;
            border-left: 2px solid #e6eaed;
            content: "";
          }
        }
        li:last-child {
          float: left;
          width: auto;
          &::after {
            content: none;
          }
        }
      }
    }
    & > #footer_contents_download {
      display: flex;
      font-size: 13px;
      & > a {
        width: auto;
        font-weight: 500;
      }
      & > a:first-child {
        margin-right: 18px;
      }
      & > a:before {
        content: url(${images.applestore});
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        transition: filter 0.2s;
        filter: opacity(1);
        &:hover {
          filter: opacity(0.5);
        }
      }
      & > a:last-child:before {
        content: url(${images.playstore});
      }
    }
  }
  & > #footer3 {
    background: black;
    padding: 24px 16px 40px;
    & > div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: "0px auto";
      color: ${colors.primary2};
      font-size: 14px;

      @media (min-width: ${viewport.desktop}) {
        & > span {
          display: block;
        }
      }
    }
  }
`;

const WadizNews = styled.div`
  width: 100%;
  & > .WadizNewsItem {
    margin: 0 auto;
    padding: 40px 80px;
    width: 100%;
    border-top: solid 1px rgba(0, 0, 0, 0.06);
  }
`;

const WadizNewsItem_Users = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  display: inline-block;
  top: 3px;
  background-color: ${colors.primary};
  border-radius: 50%;
`;

const WrapItem = styled.div`
  margin: 8px auto;
  padding: 40px 80px;
  width: 100%;
  max-width: 1440px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.06);
`;

const TrandItem = styled.div`
  width: calc(33.333% - 21.333px);
  float: left;
  clear: none;
  margin-right: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;

  & > ul {
    display: flex;
    flex-flow: row wrap;
    & > li {
      width: calc(50% - 6px);
      min-height: 150px;
    }
    &::before {
      display: block;
      /* position: absolute;
    top: -92px;
    bottom: -40px; */
      height: 100%;
      border-left: 1px solid #f0f2f5;
      content: "";
    }
    &::before:first-child {
      content: none;
    }
  }
`;
export default Home;
