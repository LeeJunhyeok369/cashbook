import React from "react";
import styled from "styled-components";
import HistoryBar from "./HistoryBar";

const Summary = styled.div`
  width: 90%;
  min-height: 100px;
  background-color: #ffffff;
  height: auto;
  border-radius: 25px;
  padding: 1rem 5%;

  > h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export default function MonthSummary() {
  return (
    <Summary>
      <h3>10월 총 지출: 0원</h3>
      <HistoryBar />
    </Summary>
  );
}
