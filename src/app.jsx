import React, { useState } from 'react'
import Header1 from './header';
import User from './user';
import RedColor from './RedColor';
import BlueColor from './BlueColor';
import Counter from './counter';
import { Route , Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Calculator from './Calculator';


export default function App() {
    const [color , setColor] = useState(false);
  return (
    <>
 
   <Routes>
    <Route path='/' element={
      <Header1 />
    } />
    <Route path="/home" element ={
      <>
      <Header1 />
      <Home />  
      </>
      }
   />
    <Route path='/about' element={ <><Header1 /> <About /></>} />
    <Route path='/calculator' element={<><Header1 /> <Calculator /></>} />
    </Routes>
    
    </>
  )
}
