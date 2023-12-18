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
    // Check if the counter is greater than 0 before decrementing
    if (counter > 0) {
      // setCounter(counter - 1)
      setCounter(prevCounter => prevCounter - 1)
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between' }}>
        <div>
          <h1>React Counter</h1>
          <h2>Updating the counter value to demonstrate the use of useSate Hook🪝: {counter}</h2>

          <button style={{ margin: '5px' }} onClick={incrementCounter}>
            ➕ {counter}
          </button>

          <button style={{ margin: '5px' }} onClick={decrementCounter}>
            ➖{counter}
          </button>

          <p>Demo value: {counter}</p>

          <p>Click the buttons to increment or decrement the counter value. The counter value will not go below 0.</p>
        </div>
        <footer style={{ textAlign: 'center', padding: '10px', borderTop: '1px solid #ccc' }}>
          {/* <footer style={{ textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width:'100%', borderTop: '1px solid #ccc' }}> */}
          {/* <footer style={{ textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%', borderTop: '1px solid #ccc' }}> */}
          <p>React Counter App - Created by @developer_ankitt</p>
        </footer>
      </div>
    </>
  )
}

export default App