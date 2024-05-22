import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DefaultLayout() {
  const Wrap = styled.div`
    max-width: 100%;
    background-color: #f7f7f9;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @font-face {
      font-family: "Pretendard-Regular";
      src: url("/assets/fonts/Pretendard-Regular.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }

    * {
      font-family: "Pretendard-Regular";
    }
  `;

  const InnerWrap = styled.div`
    width: 80%;
    min-width: 1100px;
    height: 85%;
    min-height: 700px;
    background-color: #fff;
  `;

  return (
    <Wrap>
      <InnerWrap>
        <Outlet />
      </InnerWrap>
    </Wrap>
  );
}
