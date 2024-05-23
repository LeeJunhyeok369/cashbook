import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DefaultLayout() {
  const Wrap = styled.div`
    max-width: 100%;
    background-color: #fff;
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
    @font-face {
      font-family: "Pretendard-SemiBold";
      src: url("/assets/fonts/Pretendard-SemiBold.woff") format("woff");
      font-weight: 500;
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
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  `;

  return (
    <Wrap>
      <InnerWrap>
        <Outlet />
      </InnerWrap>
    </Wrap>
  );
}
