import Card from './componets/Card'
import './App.css'

function App() {
let myObj = {
  username: "abhishek",
  age: 21
}
let newArr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

<Card username="abc" btnText="click me" />
<Card username="def" />
   
    </>
  )
}

export default App
