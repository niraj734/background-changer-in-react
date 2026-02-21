import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState("white");

  return(
    <>
      <div style={{ backgroundColor: color, height: "100vh" }}>
        <button onClick={() => setColor("red")}>RED</button>
        <button onClick={() => setColor("green")}>GREEN</button>
        <button onClick={() => setColor("blue")}>BLUE</button>
      </div>
      
      
    </>
  )
}

export default App
