import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./whichFood.css";
import { useEffect } from "react";

function WhichFood() {
  const { dataBase, foodGroupList, replacedFood, updateStateInfo } =
    useOutletContext();
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
    navigate("/amountCalculator/howMany");
  }

  useEffect(() => {
    if (foodGroupList.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <form className="whichFood" onSubmit={handleSubmit}>
      <label htmlFor="whichFoodList">Which food you want to replace?</label>
      <select
        id="whichFoodList"
        value={replacedFood}
        onChange={updateStateInfo}
        name="whichFoodList"
        required
      >
        <option value="">-</option>
        {foodGroupList.map(getFoodOption)}
      </select>
      <p>
        Can't find the food that you want?
        <span className="clickHere">
          <Link
            to="/amountCalculator/newFood"
            state={{ fromWhichFoodPage: true }}
          >
            Click here!
          </Link>
        </span>
      </p>
      <div className="navButton">
        <button type="submit">Next :)</button>
      </div>
    </form>
  );
}

export default WhichFood;
