import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HistoryContext } from "../context/HistoryContext";
import History from "./History";
import MonthSummary from "./MonthSummary";

const HistoryWrap = styled.div`
  width: 94%;
  height: calc(94% - 100px);
  padding: 3%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #dddddd1c;
  }
`;

export default function MonthHistory() {
  const [nowData, setNowData] = useState([]);
  const historyContext = useContext(HistoryContext);
  const nowMonth = historyContext.nowMonth;
  const data = historyContext.data;

  useEffect(() => {
    const filteredData = data
      .filter((item) => Number(item.date.split("-")[1]) === nowMonth)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setNowData(filteredData);
  }, [data, nowMonth]);

  return (
    <HistoryWrap>
      <MonthSummary nowData={nowData} nowMonth={nowMonth} />
      {nowData.map((e) => (
        <History
          key={e.id}
          id={e.id}
          date={e.date}
          item={e.item}
          amount={e.amount}
          description={e.description}
        />
      ))}
    </HistoryWrap>
  );
}
