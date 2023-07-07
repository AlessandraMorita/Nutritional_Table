import { Link, useNavigate } from "react-router-dom";
import "./whichFood.css";

function WhichFood(props) {
  const dataBase = props.dataBase;
  const replacedFood = props.replacedFood;
  const foodGroupList = props.foodGroupList;
  const navigate = useNavigate();

  function updateStateInfo(e) {
    props.updateStateInfo(e);
  }

  function getFoodOption(group, index) {
    return (
      <optgroup label={group} key={index} >
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

  return (
    <form className="whichFood" onSubmit={handleSubmit}>
      <label htmlFor="whichFoodList">Which food I want to replace?</label>
      <select
        id="whichFoodList"
        value={replacedFood}
        onChange={updateStateInfo}
        name="whichFoodList"
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
