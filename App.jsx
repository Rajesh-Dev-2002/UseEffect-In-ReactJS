import React, { useEffect, useState } from 'react'

export default function App() {
  const [count,setCount]=useState(0);
  
   useEffect(()=>{
    console.log("component Mounted");
   },[count])
  const increase=()=>{
    setCount(count+1)
  }

  const decrease=()=>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>Count Increases {count} times</h1>
      <button onClick={increase} >Increase</button>
      <button onClick={decrease}>Decrease</button>
      
    </div>
  )
}
