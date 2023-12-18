import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  //let counter = 15

  const incrementCounter = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Updating the counter value to demonstrate the use of useSate Hook🪝: {counter}</h2>

      <button
        onClick={incrementCounter}
      >➕ {counter}</button>

      <button
        onClick={decrementCounter}
      >➖{counter}</button>
      <p>Demo footer value: {counter}</p>
    </>
  )
}

export default App