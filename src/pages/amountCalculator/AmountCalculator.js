import React from 'react'
import Calculator from '../../components/calculator/Calculator';
import data from "../../app/data";
import './amountCalculator.css';

function AmountCalculator() {
  return (
    <div className='amountCalculator'>
        <h2>How many?</h2>
        <Calculator dataBase={data} />
    </div>
  )
}

export default AmountCalculator