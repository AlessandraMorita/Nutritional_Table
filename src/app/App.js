import React from "react";
import "./App.css";
import data from "./data";
import FoodGroupList from "../components/foodGroupList/FoodGroupList";

function App() {
  return (
    <div className="App">
      <section className="introduction">
        <h1>Nutritional Information</h1>
        <p>Hello me!</p>
        <p>
          This app was developed to help me replace foods in my diet. It
          suggests substitute foods and calculates the required amount of it.
        </p>
        <p className="textRef">
          The data is based on my diet and data provided by my nutritionist.
        </p>
      </section>

      <section className="foodReplaceList">
        <h2>Which food group do I want to replace?</h2>
        <FoodGroupList dataBase={data} />
      </section>
    </div>
  );
}

export default App;
