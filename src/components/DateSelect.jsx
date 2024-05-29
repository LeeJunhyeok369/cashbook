import React, { useContext } from "react";
import styled from "styled-components";
import { HistoryContext } from "../context/HistoryContext";
import MonthBtn from "./MonthBtn";

const MonthMenus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function DateSelect() {
  const historyContext = useContext(HistoryContext);
  const nowMonth = historyContext.nowMonth;
  const setNowMonth = historyContext.setNowMonth;

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
