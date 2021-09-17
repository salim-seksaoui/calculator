import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';





import  * as math from "mathjs";

import './Calculator.css';

import BeautifullScreen from '../../components/BeautifullScreen/index';
import AmazingNumberButton from '../../components/Buttons/AmazingNumberButton/index';
import GreatOperatorButton from '../../components/Buttons/GreatOperatorButton/index';
import MagnificientEqualButton from '../../components/Buttons/MagnificientEqualButton/index';

import ItsOver from '../../components/ItsOver/index';







const Calculator = () => {
  const [operations, setOperations] = useState("");
  const [result, setResult] = useState("");

  const [over9000, setMessage] = useState("");

  const addToOperation = (val) => {
        setOperations((operations) => [...operations, val + ""]);
  }

  const calcResult = () => {
    try {
    const input = operations.join(""); 

    setResult(math.evaluate(input));
    }catch(err) {
      setResult("Thor is tired..")
    }
  };

  useEffect(() => {
    if(result > 9000){
      setMessage("It's over 9000 !!");
    }else{
      setMessage('');
    };
  },[result]);


  const resetInput = () => {
    setOperations("");
    setResult("");
  }

  const buttonColor = "#f2a33c";

  return (
    <>
    <div className="calculator">
      <div className="title">
        <h2>CalculaTHOR9000</h2>
      </div>
      <div className="calc-wrapper">

        <ItsOver className="over9000" value={over9000}/>

        <BeautifullScreen text={BeautifullScreen || ""} operations={operations || ""} result={result || ""}/>
          
        
        <div className="row">
          <AmazingNumberButton symbol="7" handleClick={addToOperation} />
          <AmazingNumberButton symbol="8" handleClick={addToOperation} />
          <AmazingNumberButton symbol="9" handleClick={addToOperation} />
          <GreatOperatorButton symbol="/" color={buttonColor} handleClick={addToOperation} />
        </div>
        <div className="row">
          <AmazingNumberButton symbol="4" handleClick={addToOperation} />
          <AmazingNumberButton symbol="5" handleClick={addToOperation} />
          <AmazingNumberButton symbol="6" handleClick={addToOperation} />
          <GreatOperatorButton symbol="*" color={buttonColor} handleClick={addToOperation} />
        </div>
        <div className="row">
          <AmazingNumberButton symbol="1" handleClick={addToOperation} />
          <AmazingNumberButton symbol="2" handleClick={addToOperation} />
          <AmazingNumberButton symbol="3" handleClick={addToOperation} />
          <GreatOperatorButton symbol="+" color={buttonColor} handleClick={addToOperation} />
        </div>
        <div className="row">
          <AmazingNumberButton symbol="0" handleClick={addToOperation} />
          <GreatOperatorButton symbol="." handleClick={addToOperation} />
          <GreatOperatorButton symbol="C" color="red" handleClick={resetInput} />
          <GreatOperatorButton symbol="-" color={buttonColor} handleClick={addToOperation} />
        </div>
          <MagnificientEqualButton symbol="Ask Thor" color="blue" handleClick={calcResult} />
      </div>
    </div>
    </>
  );
}


export default Calculator
