import styled from 'styled-components';
import img from "../assets/log/image.png"

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f9fc;
  background-image: url(${img});
  background-position:center;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  width: 350px;
  background-color:transparent;
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
    box-shadow: 0 0 10px rgba(1, 123, 255, 2.9);
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
 h1{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
 }
`;
export const DemoAc = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center; gap: 10px;
 h3{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
 }
 h5{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
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
