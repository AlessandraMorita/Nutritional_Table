import React, { useEffect, useState } from 'react';
import './foodGroupList.css';
import FoodGroup from '../foodGroup/FoodGroup';

function FoodGroupList(props) {
    const [ foodGroupList, setFoodGroupList ] = useState([]);
    const dataBase = props.dataBase;

    function getFoodData() {
        let groupList = [];
        dataBase.forEach((elem) => {
            let foodGroup = elem.group;
            if(!groupList.includes(foodGroup)) {
                groupList.push(foodGroup);
            }
        });
        setFoodGroupList(groupList);
    }

    useEffect(() => {
        getFoodData();
    }, []);

  return (
    <div className='foodGroupList'>
        <ul>
            {foodGroupList.map((elem, index) => {
                return <FoodGroup key={index} foodGroup={elem} dataBase={dataBase} />;
            })}
        </ul>
    </div>
  )
}

export default FoodGroupList;