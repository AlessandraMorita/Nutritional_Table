import React, { useEffect } from "react";
import "./replacementFood.css";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

function ReplacementFood() {
  const {
    dataBase,
    foodGroupList,
    replacedFood,
    replacementFood,
    newFood,
    updateStateInfo,
  } = useOutletContext();
  const navigate = useNavigate();

  function getFoodOption(group, index) {
    return (
      <optgroup label={group} key={index}>
        {dataBase.map((elem, index) => {
          if (elem.group === group) {
            return (
              <option key={index} value={elem.ingredient}>
                {elem.ingredient}
              </option>
            );
          }
        })}
      </optgroup>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/amountCalculator/results");
  }

  useEffect(() => {
    if (foodGroupList.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <form className="replacementFood" onSubmit={handleSubmit}>
      <label htmlFor="replacementFoodList">
        You'll replace '
        {replacedFood === "" ? newFood.replaced[0] : replacedFood}' with
      </label>
      <select
        id="replacementFoodList"
        value={replacementFood}
        onChange={updateStateInfo}
        name="replacementFood"
        required
      >
        <option value="">-</option>
        {foodGroupList.map(getFoodOption)}
        {/* {dataBase.map((elem, index) => (
          <option key={index} value={elem.ingredient}>
            {elem.ingredient}
          </option>
        ))} */}
      </select>

      <p>
        Can't find the food that you want?
        <span className="clickHere">
          <Link
            to="/amountCalculator/newFood"
            state={{ fromWhichFoodPage: false }}
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
