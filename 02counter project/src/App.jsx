import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(10)          /*hooks*/
const maxCount = 20;
const minCount = 0;


// let counter = 15

const addValue = () => {
  if (counter < maxCount) {
    setCounter(counter + 1 ,  )
    // counter = counter + 1
    // console.log("clicked",counter, Math.random());

  }
}
const removeValue = () => {
  if (counter > minCount) {
    setCounter (counter - 1)

  }
}

  return (
    <>
    
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button> <br/>
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
