import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  var [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("Value updated", counter);
    // counter += 1;
    setCounter(counter+1);
  }

  const subValue = () => {
    // console.log("Value updated", counter);
    // counter -= 1;
    if(counter > 0)
      setCounter(counter-1);
  }

  return (
    <>
      <h1>Learning ReactJS</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={subValue}>decrease Value</button>
      <button onClick={addValue}>Increase Value</button>
    </>
  )
}

export default App
