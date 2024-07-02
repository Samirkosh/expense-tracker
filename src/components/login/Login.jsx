import React, { useState } from "react";
import { Input } from "../UI/input/Input";
import Button from "../UI/button/Button";
import styled from "styled-components";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsFormValid(emailValue.includes("@") && password.length > 5);
  };

  const handllePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsFormValid(passwordValue.length > 5 && email.includes("@"));
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        type="email"
        placeholder="Введите email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Введите password"
        value={password}
        onChange={handllePasswordChange}
      />
      <Button onClick={onLogin} disabled={!isFormValid}>
        Войти
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 500px;
  height: 300px;
  background-color: aliceblue;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;

  button {
    width: 340px;
  }
`;
