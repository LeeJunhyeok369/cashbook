import React from "react";
import styled from "styled-components";
import MonthBtn from "./MonthBtn";

const MonthMenus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function DateSelect({ nowMonth, setNowMonth }) {
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <MonthMenus>
      {months.map((month) => (
        <MonthBtn
          key={month}
          nowMonth={nowMonth}
          setNowMonth={setNowMonth}
          Month={month}
        />
      ))}
    </MonthMenus>
  );
}
