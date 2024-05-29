import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

export default function MonthHistory() {
  const [nowData, setNowData] = useState([]);
  const nowMonth = useSelector((state) => state.nowMonth.nowMonth);
  const data = useSelector((state) => state.history.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // 현재 월에 해당하는 데이터 필터링
    const filteredData = data
      .filter((item) => Number(item.date.split("-")[1]) === nowMonth)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setNowData(filteredData);
  }, [data, nowMonth]); // 데이터 또는 현재 월이 변경될 때마다 재렌더링

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
