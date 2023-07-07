import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./results.css";

function Results(props) {
  const replacedFood = props.replacedFood;
  const replacedFoodAmount = props.replacedFoodAmount;
  const replacementFood = props.replacementFood;
  const newFood = props.newFood;
  const dataBase = props.dataBase;
  const [caloricValueReplaced, setCaloricValueReplaced] = useState(0);
  const [amountReplacement, setAmountReplacement] = useState(0);
  const [foodGroup, setFoodGroup] = useState([]);
  const navigate = useNavigate();

  function getCaloricValue() {
    let amount;
    let caloricValue;
    if (replacedFood !== "") {
      for (let i = 0; i < dataBase.length; i++) {
        if (replacedFood === dataBase[i].ingredient) {
          amount = dataBase[i].amountGrams;
          caloricValue = dataBase[i].caloricMeasurementKcal;
        }
      }
    } else {
      amount = newFood.replaced[1];
      caloricValue = newFood.replaced[2];
    }
    return (caloricValue * replacedFoodAmount) / amount;
  }

  function getAmountValue() {
    let amount;
    let caloricValue;
    if (replacementFood !== "") {
      for (let i = 0; i < dataBase.length; i++) {
        if (replacementFood === dataBase[i].ingredient) {
          amount = dataBase[i].amountGrams;
          caloricValue = dataBase[i].caloricMeasurementKcal;
        }
      }
    } else {
      amount = newFood.replacement[1];
      caloricValue = newFood.replacement[2];
    }

    let replacementFoodCaloricValue = getCaloricValue();

    return (amount * replacementFoodCaloricValue) / caloricValue;
  }

  function isSameFoodGroup() {
    let replacedGroup;
    let replacementGroup;
    if (replacedFood !== "") {
      for (let i = 0; i < dataBase.length; i++) {
        if (replacedFood === dataBase[i].ingredient) {
          replacedGroup = dataBase[i].group;
        }
      }
    } else {
      replacedGroup = newFood.replaced[3];
    }

    if (replacementFood !== "") {
      for (let i = 0; i < dataBase.length; i++) {
        if (replacementFood === dataBase[i].ingredient) {
          replacementGroup = dataBase[i].group;
        }
      }
    } else {
      replacementGroup = newFood.replacement[3];
    }

    if (replacedGroup !== replacementGroup) {
      return [false, replacedGroup, replacementGroup];
    }
    return [true, replacedGroup];
  }

  useEffect(() => {
    setCaloricValueReplaced(getCaloricValue());
    setAmountReplacement(getAmountValue());
    setFoodGroup(isSameFoodGroup);
  }, []);

  return (
    <div className="results">
      <p>
        You want to replace {Math.round(replacedFoodAmount)}g of '
        {replacedFood === "" ? newFood.replaced[0] : replacedFood}' which
        corresponds to {Math.round(caloricValueReplaced)}kcal.
      </p>
      <p>
        You'll replace it with {Math.round(amountReplacement)}g of '
        {replacementFood === "" ? newFood.replacement[0] : replacementFood}'.
      </p>
      {foodGroup[0] ? (
        <p className="resultsIsSameGroup">Perfect! You are replacing the same food group!</p>
      ) : (
        <p className="resultsIsSameGroup">
          You are not replacing the same food group!
          <br /> '{replacedFood === "" ? newFood.replaced[0] : replacedFood}' is{" "}
          '{foodGroup[1]}'<br /> and <br />'
          {replacementFood === "" ? newFood.replacement[0] : replacementFood}'
          is '{foodGroup[2]}'!
        </p>
      )}
      <div className="navButton">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default Results;
