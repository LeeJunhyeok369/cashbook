import React, { useState } from "react";
import styled from "styled-components";
import DateSelect from "./DateSelect";
import MonthHistory from "./MonthHistory";

const RightStyle = styled.div`
  width: 70%;
  height: 100%;
  background-color: #f7f7f9;
  overflow: hidden;
`;

export default function RightList({ fakeData }) {
  const [nowMonth, setNowMonth] = useState(2);
  return (
    <RightStyle>
      <DateSelect nowMonth={nowMonth} setNowMonth={setNowMonth} />
      <MonthHistory fakeData={fakeData} nowMonth={nowMonth} />
    </RightStyle>
  );
}
