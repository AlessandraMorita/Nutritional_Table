import React, { useState } from 'react'
import './food.css';

function Food(props) {
  const foodInfo = props.foodInfo;
  const [ isHide, setIsHide ] = useState('+');
  const [ display, setDisplay ] = useState('none');

  function handleOnClick() {
    if(isHide === '+') {
      setIsHide('-');
      setDisplay('');
    } else {
      setIsHide('+');
      setDisplay('none');
    }
  }

  return (
    <div className='foodInfo'>
      <h4>{foodInfo.ingredient}</h4>
      <h5 onClick={handleOnClick}>{isHide} Info</h5>
      <div className='nutritionFacts' style={{ display: display }}>
          <div className='servingSize'>
            <p>Serving size</p>
            <p className='info'>{foodInfo.measure} ({foodInfo.amountGrams}g)</p>
          </div>
          <div className='caloricMeasurementKcal'>
            <p>Amount of calories per serving</p>
            <p className='info'>{foodInfo.caloricMeasurementKcal}kcal</p>
          </div>
      </div>
    </div>
  )
}

export default Food