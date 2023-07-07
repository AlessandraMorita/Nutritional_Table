import React, { useState } from "react";
import "./newFood.css";
import { useNavigate, useLocation } from "react-router-dom";

function NewFood(props) {
  const newFood = props.newFood;
  const foodGroupList = props.foodGroupList;
  const navigate = useNavigate();
  const location = useLocation();
  const isFromWhichFoodPage = location.state.fromWhichFoodPage;

  const [newIngredient, setNewIngredient] = useState("");
  const [servingAmountGrams, setServingAmountGrams] = useState("");
  const [caloricMeasurementKcal, setCaloricMeasurementKcal] = useState("");
  const [group, setGroup] = useState("");

  function updateNewFood(obj) {
    props.updateNewFood(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isFromWhichFoodPage) {
      updateNewFood({
        ...newFood,
        replaced: [
          newIngredient,
          servingAmountGrams,
          caloricMeasurementKcal,
          group,
        ],
        isFromWhichFoodPage: isFromWhichFoodPage,
      });
      navigate("/amountCalculator/howMany");
    } else {
      updateNewFood({
        ...newFood,
        replacement: [
          newIngredient,
          servingAmountGrams,
          caloricMeasurementKcal,
          group,
        ],
        isFromWhichFoodPage: isFromWhichFoodPage,
      });
      navigate("/amountCalculator/results");
    }
  }

  return (
    <form className="newFood" name="newFood" onSubmit={handleSubmit}>
      <h2>What food do you want to register?</h2>
      <section>
        <label htmlFor="newIngredient">
          What food do you want to register?
        </label>
        <input
          id="newIngredient"
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          required
        />
      </section>

      <section>
        <label htmlFor="servingAmountGrams">What is the serving amount?</label>
        <div className="value">
          <input
            id="servingAmountGrams"
            type="number"
            value={servingAmountGrams}
            onChange={(e) => setServingAmountGrams(e.target.value)}
            min={1}
            required
          />
          <p>g</p>
        </div>
      </section>

      <section>
        <label htmlFor="caloricMeasurementKcal">
          How many calories per serving?
        </label>
        <div className="value">
          <input
            id="caloricMeasurementKcal"
            type="number"
            value={caloricMeasurementKcal}
            onChange={(e) => setCaloricMeasurementKcal(e.target.value)}
            min={0}
            required
          />
          <p>kcal</p>
        </div>
      </section>

      <section>
        <label htmlFor="group">Which group?</label>
        <select
          id="group"
          className="groupList"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          required
        >
          <option value="">-</option>
          {foodGroupList.map((elem, index) => {
            return (
              <option key={index} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </section>

      <div className="navButton">
        <button onClick={() => navigate(-1)}>Back</button>
        <button type="submit">Next :)</button>
      </div>
    </form>
  );
}

export default NewFood;
