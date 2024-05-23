import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(233, 236, 239);
  overflow: hidden;
  height: 3rem;
  border-radius: 10px;
`;

export default function HistoryBar() {
  return <Bar></Bar>;
}
