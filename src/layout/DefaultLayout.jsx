import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getLocalStorege } from "../Hooks/LocalStorage";
import { setData as setDataAction } from "../redux/slice/historySlice";
const Wrap = styled.div`
  max-width: 100%;
  background-color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("/assets/fonts/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard-SemiBold";
    src: url("/assets/fonts/Pretendard-SemiBold.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  * {
    font-family: "Pretendard-Regular";
  }
`;

export default function DefaultLayout() {
  const data = useSelector((state) => state.history.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const savedData = getLocalStorege("data");
    if (savedData !== undefined) {
      // 로컬 스토리지에 저장된 데이터가 있을 경우 Redux store에 데이터 설정
      dispatch(setDataAction(savedData));
      console.log(savedData);
    } else {
      // 로컬 스토리지에 저장된 데이터가 없을 경우 현재 데이터를 로컬 스토리지에 저장
      localStorage.setItem("data", JSON.stringify(data));
      console.log("ww");
    }
  }, []);

  // useEffect(() => {
  //   setLocalStorege("data", data);
  // }, [data]);

  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
}
