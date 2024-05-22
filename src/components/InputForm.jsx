import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

export default function InputForm() {
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const InputForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 10%;
    /* margin-top: 2rem; */

    > button {
      width: 100%;
      text-align: center;
      height: 45px;
      line-height: 45px;
      background-color: #5383e8;
      color: #fff;
      border: 0;
      border-radius: 1rem;
      margin-top: 1rem;
    }
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <InputForm>
      <Input
        label="날짜"
        value={formData.date}
        onChange={handleChange}
        placeholder="YYYY-MM-DD"
        name="date"
      />
      <Input
        label="항목"
        type="number"
        value={formData.item}
        onChange={handleChange}
        placeholder="지출 항목"
        name="item"
      />
      <Input
        label="금액"
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
      <button type="submit">저장</button>
    </InputForm>
  );
}
