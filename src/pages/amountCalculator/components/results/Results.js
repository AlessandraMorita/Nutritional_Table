import React from "react";

function Results(props) {
  const replacedFood = props.replacedFood;
  const replacedFoodAmount = props.replacedFoodAmount;
  const replacementFood = props.replacementFood;
  const newFood = props.newFood;

  return (
    <div>
      <p>
        replacedFood: {replacedFood === "" ? newFood.replaced[0] : replacedFood}
      </p>
      <p>replacedFoodAmount: {replacedFoodAmount}</p>
      <p>
        replacementFood: {replacementFood === "" ? newFood.replacement[0] : replacementFood}
      </p>
    </div>
  );
}

export default Results;
