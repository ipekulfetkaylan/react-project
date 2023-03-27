
import {useState} from 'react';
import './App.css';



function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops= ['/', '*', '+', '-', '.'];
  const updateCalc= (value)=>{
    if((ops.includes(value) && calc === '') || (ops.includes(value)&& ops.includes(calc.slice(-1)))){
      return;
    }
    setCalc(calc + value)
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = ()=>{
    const digits= [];
    for(let i=1; i<10; i++){
        digits.push( <button  onClick= {()=>updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digits;
  }

  const calculate= ()=>{
    setCalc(eval(calc).toString())
  }

  const deleteLast = ()=>{
    if(calc === ''){
      return;
    }
    const value= calc.slice(0, -1)
    setCalc(value)
  }
  const reset = ()=>{
    setCalc("")
  }
  
  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operand'>{result ? <span>{result}</span> : ''}</div>
        <div className='current-operand'>{calc || "0"}</div>
      </div>
      <button className='span-two' onClick={reset}>AC</button>
      <button className='span-two' onClick={deleteLast}>DEL</button>
      <button onClick= {()=>updateCalc('/')} >/</button>
      <button  onClick= {()=>updateCalc('+')}>+</button>
      <button  onClick= {()=>updateCalc('*')}>*</button>
      <button  onClick= {()=>updateCalc('-')}>-</button>
      {createDigits()}
      <button  onClick= {()=>updateCalc('0')}>0</button>
      <button  onClick= {()=>updateCalc('.')}>.</button>
      <button onClick={calculate}>=</button>
    </div>
  );
}

export default App;
