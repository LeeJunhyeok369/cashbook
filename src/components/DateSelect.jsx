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

export default function DateSelect() {
  // const MonthMenu = useMemo();

  return (
    <MonthMenus>
      <MonthBtn Month={1} />
      <MonthBtn Month={2} />
      <MonthBtn Month={3} />
      <MonthBtn Month={4} />
      <MonthBtn Month={5} />
      <MonthBtn Month={6} />
      <MonthBtn Month={7} />
      <MonthBtn Month={8} />
      <MonthBtn Month={9} />
      <MonthBtn Month={10} />
      <MonthBtn Month={11} />
      <MonthBtn Month={12} />
    </MonthMenus>
  );
}
