import React from 'react';
import styled from 'styled-components';

const CreateAccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ff9a9e;
  outline: none;
  &:focus {
    border-bottom: 2px solid #fad0c4;
  }
`;

const Button = styled.button`
  padding: 10px;
  background: #ff9a9e;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #fad0c4;
  }
`;

const CreateAccount = () => {
  return (
    <CreateAccountWrapper>
      <Form>
        <h2>Create Account</h2>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Create Account</Button>
      </Form>
    </CreateAccountWrapper>
  );
};

export default CreateAccount;
