
import { useState } from 'react';
import './App.css'

function App() {


  let [counter ,setCounter] = useState(10)
 
  // let counter = 10;
  const addValue =()=>{
    // console.log("value incremented",Math.random());
    // counter++
    // counter += 1
    setCounter(counter+1)
    // console.log(counter);
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>hwy we are here to understarnd Hooks.</h1>
      <h3>Counter:{counter}</h3>
      
      <button onClick={addValue}>Increment by one</button>
      <button onClick={removeValue}>Decrement by one</button>


    </>
  )
}

export default App
