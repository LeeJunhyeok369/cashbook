import React from "react";
import styled from "styled-components";

const StlyeMonthBtn = styled.div`
  width: calc(100% / 6);
  height: 50px;
  background-color: #8eaeee;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 1.2rem;
  /* border-radius: 100%; */
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #5383e8;
  }
`;
export default function MonthBtn({ Month }) {
  return <StlyeMonthBtn>{Month}월</StlyeMonthBtn>;
}
