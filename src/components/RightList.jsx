import React from "react";
import styled from "styled-components";
import DateSelect from "./DateSelect";
import MonthHistory from "./MonthHistory";

const RightStyle = styled.div`
  width: 70%;
  height: 100%;
  background-color: #f7f7f9;
  overflow: hidden;
`;

export default function RightList() {
  return (
    <RightStyle>
      <DateSelect />
      <MonthHistory />
    </RightStyle>
  );
}
