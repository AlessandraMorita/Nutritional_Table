import React, { useState } from "react";
import "./foodGroup.css";
import Food from "../food/Food.js";

function FoodGroup(props) {
  const dataBase = props.dataBase;
  const foodGroup = props.foodGroup;
  const [isHide, setIsHide] = useState(true);
  const [display, setDisplay] = useState("none");

  function handleOnClick() {
    if (isHide) {
      setIsHide(false);
      setDisplay("");
    } else {
      setIsHide(true);
      setDisplay("none");
    }
  }

  return (
    <div className="foodGroup">
      <div className="foodGroupTitle">
        <h3 onClick={handleOnClick}>{props.foodGroup}</h3>
        <p style={{ display: display }} onClick={handleOnClick}>x</p>
      </div>
    
      <div className="foodList" style={{ display: display }}>
        {dataBase.map((elem, index) => {
          return elem.group === foodGroup ? (
            <Food key={index} dataBase={dataBase} foodInfo={elem} />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default FoodGroup;
