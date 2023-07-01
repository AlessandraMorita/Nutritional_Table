import React, { useState } from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import FoodReplaceList from "../pages/foodReplaceList/FoodReplaceList";
import AmountCalculator from "../pages/amountCalculator/AmountCalculator";
import Root from "../components/root";
import WhichFood from "../pages/amountCalculator/components/whichFood/WhichFood";
import NewFood from "../pages/amountCalculator/components/newFood/NewFood";
import HowMany from "../pages/amountCalculator/components/howMany/HowMany";
import dataBase from "./data";
import ReplacementFood from "../pages/amountCalculator/components/replacementFood/ReplacementFood";
import Results from "../pages/amountCalculator/components/results/Results";
// import HomePage from "../pag/es/homePage/HomePage";

function App() {
  const [replacedFood, setReplacedFood] = useState("");
  const [replacedFoodAmount, setReplacedFoodAmount] = useState("");
  const [replacementFood, setReplacementFood] = useState("");
  // const [replacementFoodInfo, setReplacementFoodInfo] = useState("");

  function updateStateInfo(e) {
    switch (e.target.name) {
      case "whichFoodList":
        setReplacedFood(e.target.value);
        break;
      case "replacedFoodAmount":
        setReplacedFoodAmount(e.target.value);
        break;
      case "replacementFood":
        setReplacementFood(e.target.value);
        break;
    }
  }

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/foodReplaceList" element={<FoodReplaceList />} />
            <Route path="/amountCalculator" element={<AmountCalculator />}>
              <Route
                path="/amountCalculator"
                element={
                  <WhichFood
                    dataBase={dataBase}
                    replacedFood={replacedFood}
                    updateStateInfo={(e) => updateStateInfo(e)}
                  />
                }
              />
              <Route
                path="/amountCalculator/howMany"
                element={
                  <HowMany
                    replacedFood={replacedFood}
                    replacedFoodAmount={replacedFoodAmount}
                    updateStateInfo={(e) => updateStateInfo(e)}
                  />
                }
              />
              <Route
                path="/amountCalculator/replacementFood"
                element={
                  <ReplacementFood
                    replacedFood={replacedFood}
                    replacementFood={replacementFood}
                    updateStateInfo={(e) => updateStateInfo(e)}
                    dataBase={dataBase}
                  />
                }
              />
              <Route path="/amountCalculator/newFood" element={<NewFood />} />
              <Route path="/amountCalculator/results" element={<Results />} />
            </Route>
          </Route>
        )
      )}
    />
  );
}

export default App;
