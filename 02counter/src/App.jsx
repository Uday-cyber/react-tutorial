import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("Value updated", counter);
    // counter += 1;
    setCounter(counter+1);

    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)

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

      <button onClick={subValue}>&darr;</button>
      <button onClick={addValue}>&uarr;</button>
    </>
  )
}

export default App
