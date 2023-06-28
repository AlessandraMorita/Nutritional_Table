import "./calculator.css";
import React, { useState } from "react";

function Calculator(props) {
  const [replacedFood, setReplacedFood] = useState("");
  const [replacedFoodAmount, setReplacedFoodAmount] = useState("");
  const [replacementFood, setReplacementFood] = useState("");
  const [replacementFoodInfo, setReplacementFoodInfo] = useState("");
  const dataBase = props.dataBase;

  function findReplacedFoodInfo() {}

  function getReplacementFoodInfo() {}

  function handleSubmit(e) {
    e.preventDefault();
    findReplacedFoodInfo();
    getReplacementFoodInfo();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="replacedFood">Which food I want to replace?</label>
      <input
        id="replacedFood"
        type="text"
        list="replacedFoodChoice"
        value={replacedFood}
        onChange={(e) => setReplacedFood(e.target.value)}
      />
      <datalist id="replacedFoodChoice">
        {dataBase.map((elem) => (
          <option value={elem.ingredient} />
        ))}
      </datalist>

      <label htmlFor="replacedFoodAmount">How many of it should I eat?</label>
      <input
        id="replacedFoodAmount"
        type="number"
        value={replacedFoodAmount}
        onChange={(e) => setReplacedFoodAmount(e.target.value)}
        min={1}
      />

      <label htmlFor="replacementFood">I'll replace it with </label>
      <input
        id="replacementFood"
        type="text"
        value={replacementFood}
        onChange={(e) => setReplacementFood(e.target.value)}
      />

      <button type="submit">Get the replacement food infomations :)</button>

      <div>
        <p>{replacementFoodInfo}</p>
      </div>
    </form>
  );
}

export default Calculator;
