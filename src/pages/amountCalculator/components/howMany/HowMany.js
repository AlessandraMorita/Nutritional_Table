import { useNavigate } from "react-router-dom";
import "./howMany.css";

function HowMany(props) {
  const replacedFood = props.replacedFood;
  const replacedFoodAmount = props.replacedFoodAmount;
  const navigate = useNavigate();

  function updateStateInfo(e) {
    props.updateStateInfo(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/amountCalculator/replacementFood");
  }

  return (
    <form onSubmit={handleSubmit} className="replacedFoodAmount">
      <label htmlFor="replacedFoodAmount">
        How many of '{replacedFood}' should I eat?
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
