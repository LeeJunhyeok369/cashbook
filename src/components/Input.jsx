import React from "react";
import styled from "styled-components";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  const InputWrapper = styled.div`
    margin-bottom: 1rem;
    width: 100%;
  `;
  const Input = styled.input`
    width: calc(100% - 20px);
    border: 0;
    background-color: #fff;
    height: 45px;
    padding: 0 10px;
    border-radius: 0.4rem;
  `;
  const Label = styled.label`
    line-height: 2rem;
    margin-left: 10px;
    color: #333;
  `;

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}
