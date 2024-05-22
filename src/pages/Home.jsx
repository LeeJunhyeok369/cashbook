import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";

export default function Home() {
  const Flex = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
  `;

  const LeftMenu = styled.div`
    width: 30%;
    height: 100%;
    background-color: #d5e3ff;
  `;
  const RigthList = styled.div`
    width: 70%;
    height: 100%;
  `;
  const Title = styled.h1`
    height: 23%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    text-align: center;
    line-height: 3rem;
    padding: 0 10%;
    font-weight: bold;
    word-break: keep-all;
  `;

  return (
    <Flex>
      <LeftMenu>
        <Title>개인 지출 관리 애플리케이션</Title>
        <InputForm />
      </LeftMenu>
      <RigthList></RigthList>
    </Flex>
  );
}
