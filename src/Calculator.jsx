import React, { useState } from 'react'

import './header.css'

export default function Calculator() {
    const [result , setResult] = useState('');
    const clickHandler = (event)=>{
        setResult(result.concat(event.target.value));
    };
    const clear = ()=>{
        setResult('')
    }
    const evaluate = () =>{
        
        const evalExpression = eval(result);
        if(Number.isNaN(evalExpression)){
            setResult('error')
            
        }
        else{
            setResult(evalExpression.toString())
        }
        
        
        
    }
  return (
    <div className="calcBody">
    <div className='containerCalc'>
        <input type='text' placeholder='0' id='answer' value={result} />
        <input type='button' value='9' className='button' onClick={clickHandler}/>
        <input type='button' value='8' className='button' onClick={clickHandler}/>
        <input type='button' value='7' className='button'onClick={clickHandler}/>
        <input type='button' value='6' className='button'onClick={clickHandler}/>
        <input type='button' value='5' className='button'onClick={clickHandler}/>
        <input type='button' value='4' className='button'onClick={clickHandler}/>
        <input type='button' value='3' className='button'onClick={clickHandler}/>
        <input type='button' value='2' className='button'onClick={clickHandler}/>
        <input type='button' value='1' className='button'onClick={clickHandler}/>

        <input type='button' value='0' className='button'onClick={clickHandler}/>
        <input type='button' value='+' className='button' onClick={clickHandler}/>
        <input type='button' value='-' className='button' onClick={clickHandler}/>
        <input type='button' value='/' className='button' onClick={clickHandler}/>
        <input type='button' value='*' className='button' onClick={clickHandler}/>
        <input type='button' value='%' className='button' onClick={clickHandler}/>
        <input type='button' value='.' className='button' onClick={clickHandler}/>

        <input type='button' value='=' className='button1' onClick={evaluate}/>
        <input type='button' value='clear' className='button1' onClick={clear}/>
    </div>
    </div>
    
  )
}
