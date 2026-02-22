import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColour]=useState("white");

  return(
    <>
      <div style={{ backgroundColor: color, height: "100vh" }}>
        <button onClick={() => setColour("red")}>RED</button>
        <button onClick={() => setColour("green")}>GREEN</button>
        <button onClick={() => setColour("blue")}>BLUE</button>
      </div>
      
      
    </>
  )
}

export default App
