import { useState } from 'react'
import TotalScore from './02TotalScore'
import NumberSelector from './03NumberSelector'
import RoleDice from './04RoleDice'
import Rules from './06Rules'
import styled from 'styled-components'
import { Button, OutlineButton } from './styled/Button'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
};
const roleDice = () => {
  if (!selectedNumber) {
    
    setError("You have not selected any number");

    return;
  } 
  setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber ){
      setScore((prev) => prev + randomNumber);
    }else {
      setScore((prev) => prev - 2);
    }
    
    setSelectedNumber (undefined)
};

const reserScore = () => {
  setScore(0);
}

  return (
    <MainContainer>
    <div className='top_section'>
    <TotalScore score={score} />
    <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice  currentDice={currentDice}
    roleDice={roleDice}
    />
    <div className='btns'>
      <OutlineButton onClick={reserScore}>Reset Score</OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>
        {
          showRules ? "Hide" : "Show"
        }
        Show Rules</Button>
    </div>
  {showRules && <Rules />}
    </MainContainer>

   );
};

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    margin-top: 40px;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`; 