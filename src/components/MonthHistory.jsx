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

export default function MonthHistory() {
  return (
    <HistoryWrap>
      <MonthSummary />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
      <History
        id={"id"}
        date={"2024-01-02"}
        item={"물건"}
        amount={"10000"}
        description={
          "월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0월 총 지출: 0"
        }
      />
    </HistoryWrap>
  );
}
