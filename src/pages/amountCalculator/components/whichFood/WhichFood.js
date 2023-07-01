import { Link, useNavigate } from "react-router-dom";
import "./whichFood.css";

function WhichFood(props) {
  const dataBase = props.dataBase;
  const replacedFood = props.replacedFood;
  const navigate = useNavigate();

  function updateStateInfo(e) {
    props.updateStateInfo(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/amountCalculator/howMany");
  }

  return (
    <form className="whichFood" onSubmit={handleSubmit}>
      <label htmlFor="whichFoodList">Which food I want to replace?</label>
      <select
        id="whichFoodList"
        className="whichFoodList"
        value={replacedFood}
        onChange={updateStateInfo}
        name="whichFoodList"
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
          <Link to="/amountCalculator/newFood">Click here!</Link>
        </span>
      </p>
      <div className="navButton">
        <button type="submit">Next :)</button>
      </div>
    </form>
  );
}

export default WhichFood;
