import {useState, useEffect} from 'react'
import "./App.css"

function App() {
  
  let [time, setTime] = useState(0)
  let[running, setRunning] = useState(false)

  useEffect(()=>{
    let intervel;
    if (running) {
    intervel = setInterval(() => {
      setTime((prevTime)=> prevTime + 10);
    }, 10);
  }
  else if (!running){
    clearInterval(intervel);
  }
  return () => clearInterval(intervel);
  },[running]);
   
  return (
    <section>
    <div className='card1'>
      <div className='head'><h1>Stop watch</h1></div> 

    <div className='card2'>
      <span>{("0" + Math.floor(time/ 60000)% 60).slice(-2)}:</span>
      <span>{("0" + Math.floor(time/ 1000)% 60).slice(-2)}:</span>
      <span>{("0" + Math.floor(time/ 10)% 100).slice(-2)}</span>
      </div>

      <button onClick={() =>{setRunning(true)}}>Start</button>
      <button onClick={() =>{setRunning(false)}}>Stop</button>
      <button onClick={() =>{setTime(0)}}>Reset</button>
    </div>
    </section>
  )
}

export default App

