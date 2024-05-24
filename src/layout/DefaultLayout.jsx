import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DefaultLayout() {
  const fakeData = useState([]);

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

  return (
    <Wrap>
      <Outlet fakeData={fakeData} />
    </Wrap>
  );
}
