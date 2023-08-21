import React, { useState, useEffect } from "react";
import "./amountCalculator.css";
import { Outlet, useNavigate } from "react-router-dom";
import dataBase from "../../app/data";

function AmountCalculator() {
  const [foodGroupList, setFoodGroupList] = useState([]);
  const [replacedFood, setReplacedFood] = useState("");
  const [replacedFoodAmount, setReplacedFoodAmount] = useState("");
  const [replacementFood, setReplacementFood] = useState("");
  const [newFood, setNewFood] = useState({
    replaced: [],
    replacement: [],
    isFromWhichFoodPage: "",
  });
  const navigate = useNavigate();

  function updateStateInfo(e) {
    switch (e.target.name) {
      case "whichFoodList":
        setReplacedFood(e.target.value);
        break;
      case "replacedFoodAmount":
        setReplacedFoodAmount(e.target.value);
        break;
      case "replacementFood":
        setReplacementFood(e.target.value);
        break;
    }
  }

  function updateNewFood(obj) {
    setNewFood(obj);

    if (obj.isFromWhichFoodPage) {
      setReplacedFood("");
    } else {
      setReplacementFood("");
    }
  }

  function getFoodGroupList() {
    let groupList = [];
    dataBase.forEach((element) => {
      let isGroupInList = groupList.includes(element.group);
      if (!isGroupInList) {
        groupList.push(element.group);
      }
    });

    setFoodGroupList(groupList);
  }

  useEffect(() => {
    getFoodGroupList();
    navigate("/amountCalculator/whichFood");
  }, []);

  return (
    <div className="amountCalculator">
      <Outlet
        context={{
          dataBase,
          foodGroupList,
          replacedFood,
          replacedFoodAmount,
          replacementFood,
          newFood,
          updateStateInfo,
          updateNewFood,
        }}
      />
    </div>
  );
}

export default AmountCalculator;
