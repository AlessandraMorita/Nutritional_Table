import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

function Introduction() {
  return (
    <div className="introduction">
      <h1>Nutritional Information</h1>
      <p>Hello me!</p>
      <p>
        This app was developed to help me replace foods in my diet. It lists substitute foods and calculates the required amount of it. You can also add a new food to the list. All you have to do is add the nutritional values of the new food.
      </p>
      <p className="textRef">
        The data is based on my diet and data provided by my nutritionist.
      </p>
      <nav className="nav-links">
        <NavLink
          to="/foodReplaceList"
          className={({ isActive }) =>
            isActive ? "nav-link active-nav-link" : "nav-link"
          }
          reloadDocument
        >
          {" "}
          Food Replace List{" "}
        </NavLink>
        <NavLink
          to="/amountCalculator"
          className={({ isActive }) =>
            isActive ? "nav-link active-nav-link" : "nav-link"
          }
          reloadDocument
        >
          {" "}
          Kcal Calculator{" "}
        </NavLink>
      </nav>
    </div>
  );
}

export default Introduction;
