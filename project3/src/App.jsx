import styled from "styled-components";
import StartGame from "./components/01StartGame";
import { useState } from "react";
import GamePlay from "./components/05GamePlay";



function App() {
 const [isGameStarted, setIsGameStarted] =  useState(false);

 const toggleGamePlay = () => {
  setIsGameStarted((prev) => !prev);
 };

  return (
    <>
    {
      isGameStarted ? <GamePlay /> : <StartGame 
      
      toggle={toggleGamePlay}
      />
    }
    </>
  )
}

export default App

const Button = styled.button `
background-color: black;
color : white;
padding: 10px;
`
