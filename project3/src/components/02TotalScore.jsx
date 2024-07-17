import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
<ScoreContainer>
        <div>
              <h1> {score} </h1>
            <p>Total Score</p>
        </div>
        
    </ScoreContainer>  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width:   200px;
text-align: center;

    h1 {
        font-size: 100px;
        margin-top: -20px;
        line-height: 100px;
        
    }
    p {
        font-size: 24px;
        font-weight: 700;
        margin-top: -60px;
    }
`;