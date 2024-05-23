import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;
  /* margin-top: 2rem; */

  > button#save {
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: #5383e8;
    color: #fff;
    border: 0;
    border-radius: 1rem;
    margin-top: 1rem;
    font-size: 1.05rem;
  }
`;

export default function InputForm() {
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form>
      <Input
        label="날짜"
        value={formData.date}
        onChange={handleChange}
        placeholder="YYYY-MM-DD"
        name="date"
      />
      <Input
        label="항목"
        value={formData.item}
        onChange={handleChange}
        placeholder="지출 항목"
        name="item"
      />
      <Input
        label="금액"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        placeholder="지출 금액"
        name="amount"
      />
      <Input
        label="내용"
        value={formData.description}
        onChange={handleChange}
        placeholder="지출 내용"
        name="description"
      />
      <button id="save" type="submit">
        저장
      </button>
    </Form>
  );
}
