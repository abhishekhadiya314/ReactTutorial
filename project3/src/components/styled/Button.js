import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  color: white;
  background: black;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black transparent;
  transition: 0.4s ease-in;
  cursor: pointer;

  &:hover{
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.3s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
   background-color: black;
    border-color: 1px solid transparent;
    color: white;
    
  }
  
`;