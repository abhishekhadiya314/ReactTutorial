import { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import ContextHeader from './components/ContextHeader/ContextHeader'
import ContactForm from './components/ContactForm/ContactForm'
import Button from './components/Button/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Navbar />
   <ContextHeader />
   < ContactForm />
      <Button />
   </div>
  )
}

export default App
