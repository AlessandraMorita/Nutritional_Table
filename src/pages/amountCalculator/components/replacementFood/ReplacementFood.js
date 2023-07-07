import React from "react";
import "./replacementFood.css";
import { Link, useNavigate } from "react-router-dom";

function ReplacementFood(props) {
  const replacedFood = props.replacedFood;
  const replacementFood = props.replacementFood;
  const newFood = props.newFood;
  const dataBase = props.dataBase;
  const navigate = useNavigate();

  function updateStateInfo(e) {
    props.updateStateInfo(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/amountCalculator/results");
  }

  return (
    <form className="replacementFood" onSubmit={handleSubmit}>
      <label htmlFor="replacementFoodList">
        I'll replace '{replacedFood === "" ? newFood.replaced[0] : replacedFood}
        ' with
      </label>
      <select
        id="replacementFoodList"
        value={replacementFood}
        onChange={updateStateInfo}
        name="replacementFood"
        required
      >
        <option value="">-</option>
        {dataBase.map((elem, index) => (
          <option key={index} value={elem.ingredient}>
            {elem.ingredient}
          </option>
        ))}
      </select>

      <p>
        Can't find the food that you want?
        <span className="clickHere">
        <Link
            to= "/amountCalculator/newFood"
            state= {{ fromWhichFoodPage: false }}
          >
            Click here!
          </Link>
        </span>
      </p>
      <div className="navButton">
        <button onClick={() => navigate(-1)}>Back</button>
        <button type="submit">Get the results :)</button>
      </div>
    </form>
  );
}

export default ReplacementFood;
