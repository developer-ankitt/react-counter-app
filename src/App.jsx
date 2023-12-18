import { useState } from 'react'
import './App.css'

// ... (other import statements and code)
// "homepage": "https://developer-ankitt.github.io/react-counter-app",


function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const decrementCounter = () => {
    // Check if the counter is greater than 0 before decrementing
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ boxShadow: '10px 10px 18px 5px rgba(0, 0, 0, 0.4)', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '300px' }}>
        <h1>React Counter</h1>
        <h2>Updating the counter value to demonstrate the use of useState Hook🪝 {counter}</h2>

        <button style={{ padding: '10px', margin: '5px' }} onClick={decrementCounter}>
          ➖{counter}
        </button>

        <button style={{ padding: '10px', margin: '5px' }} onClick={incrementCounter}>
          ➕ {counter}
        </button>

        <p>Click the buttons to increment or decrement the counter value. The counter value will not go below 0.</p>

        <footer style={{ borderTop: '1px solid #ccc', marginTop: '20px' }}>
          <p>React Counter App - Created by <a href="https://www.instagram.com/developer_ankitt/" target="_blank" rel="noopener noreferrer">developer_ankitt</a></p>
          {/* <p>React Counter App - Created by @devloper_ankitt</p> */}
        </footer>
      </div>
    </div>
  )
}

export default App
