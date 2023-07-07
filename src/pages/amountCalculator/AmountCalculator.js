import React from 'react'
import './amountCalculator.css';
import { Outlet } from 'react-router-dom';

function AmountCalculator() {
  return (
    <div className='amountCalculator'>
      <Outlet />
    </div>
  )
}

export default AmountCalculator