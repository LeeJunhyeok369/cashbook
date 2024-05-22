import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function DefaultLayout() {
  const Wrap = styled.div`
    max-width: 100%;
    background-color: #f5f5f5;
    min-height: 100vh;
  `;
  const InnerWrap = styled.div`
    max-width: 1200px;
    min-width: 800px;
    padding: 0 5%;
    margin: 0 auto;
  `;

  return (
    <Wrap>
      <InnerWrap>
        <Outlet />
      </InnerWrap>
    </Wrap>
  );
}
