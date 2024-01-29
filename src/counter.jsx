import React, { useState } from 'react'

export default function Counter() {
    const [currentCounter , UpdateCounter] = useState(0);
    const handleClick = ()=>{
        UpdateCounter(currentCounter + 1);
    };
  return (
    <>
    <h1>counter</h1>
    <button onClick={ handleClick }>{currentCounter}</button>
    </>
    
  )
}
