import React, { useState } from 'react'
import "./Calculator.css";

//function Calculator() {
    const Calculator=()=>
    {
       
        const [inputValue,setInputValue]= useState("");

        const display=(value)=>
        {
            setInputValue(inputValue+value);
        }
        const calculate=()=>
        {
            try{
              let answer =String(eval(inputValue));
             setInputValue(answer);

            }
            catch(error)
            {
              setInputValue("Error");
            }
             
        };
        const clear=()=>
        {
            setInputValue("");
        };
        const backspace=()=>
        {
          var k=inputValue
          if(inputValue==="Infinity"|| inputValue==="Error"||inputValue==="undefined")
          
            {k="";}
          
            else{k=inputValue.slice(0,-1); }
            
             setInputValue(k)

          
         
            //setInputValue(inputValue.slice(0,-1));

          
          
        };
    
  return (
   

<div className="divone col-md-3">
   
        <input type="text" id="screen" placeholder="0" value={inputValue}/>
        <br/>
        
        <button className="button number" onClick={()=> {display("9")}}>9</button>
        <button className="button number" onClick={()=> {display("8")}}>8</button>
        <button className="button number" onClick={()=> {display("7")}}>7</button>
        <br/>
        <button className="button number" onClick={()=> {display("6")}}>6</button>
        <button className="button number" onClick={()=> {display("5")}}>5</button>
        <button className="button number" onClick={()=> {display("4")}}>4</button>
        <br/>
        <button className="button number" onClick={()=> {display("3")}}>3</button>
        <button className="button number" onClick={()=> {display("2")}}>2</button>
        <button className="button number" onClick={()=> {display("1")}}>1</button>
        <br/>
        <button className="button operator" onClick={()=> {display(".")}}>.</button>
        <button className="button number" onClick={()=> {display("0")}}>0</button>
        <button className="button operator" onClick={()=> {display("/")}}>/</button>
        <br/>
        <button className="button operator" onClick={()=> {display("*")}}>*</button>
        <button className="button operator" onClick={()=> {display("+")}}>+</button>
        
        <button className="button operator" onClick={()=> {display("-")}}>-</button>
       
      

<br/>
<button className="button operator" onClick={()=> {clear();}}>C</button>
<button className="button operator" onClick={()=> {backspace();}}>D</button>
        
        <button className="button result" onClick={()=> {calculate();}}>=</button>
        
        
        
        

  
  
</div>






  )
};

export default Calculator
