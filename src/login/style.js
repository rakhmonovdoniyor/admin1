import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f9fc;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 350px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Welcome = styled.div`
 display: flex;
 gap: 30px;
`;
export const DemoAc = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center; gap: 10px;
 h3{
  display: flex;
  gap: 10px;
 }
`;
export const ErrorMestrsage = styled.div`
  color: red;
  margin-bottom: 20px;
  text-align: center;
`;
export const ErrorMessafdge = styled.div`
  color: red;
  margin-bottom: 20px;
  text-align: center;
`;
