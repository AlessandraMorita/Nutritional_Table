import React, { useState, useEffect } from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
  const [foodGroupList, setFoodGroupList] = useState("");
  const [replacedFood, setReplacedFood] = useState("");
  const [replacedFoodAmount, setReplacedFoodAmount] = useState("");
  const [replacementFood, setReplacementFood] = useState("");
  const [newFood, setNewFood] = useState({
    replaced: [""],
    replacement: [""],
    isFromWhichFoodPage: "",
  });
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

  function updateNewFood(obj) {
    setNewFood(obj);

    if (obj.isFromWhichFoodPage) {
      setReplacedFood("");
    } else {
      setReplacementFood("");
    }
  }

  function getFoodGroupList() {
    let foodGroupList = [""];
    dataBase.forEach((element) => {
      let isGroupInList = foodGroupList.includes(element.group);
      if (!isGroupInList) {
        foodGroupList.push(element.group);
      }
    });

    return foodGroupList;
  }

  useEffect(() => {
    let list = getFoodGroupList();
    setFoodGroupList(list);
  }, []);

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
                    updateStateInfo={updateStateInfo}
                    foodGroupList={foodGroupList}
                  />
                }
              />
              <Route
                path="/amountCalculator/howMany"
                element={
                  <HowMany
                    replacedFood={replacedFood}
                    newFood={newFood}
                    replacedFoodAmount={replacedFoodAmount}
                    updateStateInfo={updateStateInfo}
                  />
                }
              />
              <Route
                path="/amountCalculator/replacementFood"
                element={
                  <ReplacementFood
                    replacedFood={replacedFood}
                    newFood={newFood}
                    replacementFood={replacementFood}
                    updateStateInfo={updateStateInfo}
                    dataBase={dataBase}
                  />
                }
              />
              <Route
                path="/amountCalculator/newFood"
                element={
                  <NewFood
                    newFood={newFood}
                    updateNewFood={updateNewFood}
                    dataBase={dataBase}
                    foodGroupList={foodGroupList}
                  />
                }
              />
              <Route
                path="/amountCalculator/results"
                element={
                  <Results
                    replacedFood={replacedFood}
                    replacedFoodAmount={replacedFoodAmount}
                    replacementFood={replacementFood}
                    newFood={newFood}
                  />
                }
              />
            </Route>
          </Route>
        )
      )}
    />
  );
}

export default App;
