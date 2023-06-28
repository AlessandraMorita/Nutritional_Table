import React from 'react'
import FoodGroupList from "../../components/foodGroupList/FoodGroupList";
import './foodReplaceList.css';
import data from "../../app/data";

function FoodReplaceList() {
  return (
    <div className='foodReplaceList'>
        <h2>Which food group do I want to replace?</h2>
        <FoodGroupList dataBase={data} />
    </div>
  )
}

export default FoodReplaceList