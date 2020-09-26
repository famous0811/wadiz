import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import Header from "./Header";
import viewport from "../../constants/viewport";
interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}
function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap')"
        />
        {title ? <title>{title}</title> : ""}
      </Helmet>
      <Wrap>
        <Header />
        <Globlastyle />
        <article>{children}</article>
      </Wrap>
    </>
  );
}
const Globlastyle = createGlobalStyle`
body {
        margin: 0;
    }
    form {
      -webkit-appearance: none;
    }
    *{
      box-sizing: border-box;
    }
    a {
      color: black;
      text-decoration: none;
    }
    hr {
      border: 0;
      border-bottom: 1px solid gray;
    }
    ul{
      list-style: none;
      padding:0;
      margin:0;
    }
`;
const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & > article {
    flex: 1;
    /* display: flex;
    flex-direction: column; */
    box-sizing: border-box;
    /* padding: 1em; */
    margin-top: 56px;
    @media screen and (min-width: ${viewport.desktop}) {
      /* padding: 1em 8vw; */
    }
  }
`;
export default Layout;
