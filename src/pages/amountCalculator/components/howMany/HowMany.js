import { useNavigate } from "react-router-dom";
import "./howMany.css";
import { useEffect } from "react";

function HowMany({
  replacedFood,
  replacedFoodAmount,
  updateStateInfo,
  newFood,
}) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/amountCalculator/replacementFood");
  }

  useEffect(() => {
    if (replacedFood === "" && newFood.replaced.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="replacedFoodAmount">
      <label htmlFor="replacedFoodAmount">
        How many of '{replacedFood === "" ? newFood.replaced[0] : replacedFood}'
        should you eat?
      </label>
      <div className="amount">
        <input
          id="replacedFoodAmount"
          type="number"
          value={replacedFoodAmount}
          onChange={updateStateInfo}
          min={1}
          name="replacedFoodAmount"
          required
        />
        <p>g</p>
      </div>
      <div className="navButton">
        <button onClick={() => navigate(-1)}>Back</button>
        <button type="submit">Next :)</button>
      </div>
    </form>
  );
}

export default HowMany;
