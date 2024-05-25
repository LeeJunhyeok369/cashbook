import React from "react";
import styled from "styled-components";
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

export default function MonthHistory({ fakeData, nowMonth }) {
  const nowFakeData = fakeData
    .filter((item) => Number(item.date.split("-")[1]) == nowMonth)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <HistoryWrap>
      <MonthSummary nowFakeData={nowFakeData} nowMonth={nowMonth} />
      {nowFakeData.map((e) => (
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
