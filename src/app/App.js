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

function App() {
  const [foodGroupList, setFoodGroupList] = useState([]);
  const [replacedFood, setReplacedFood] = useState("");
  const [replacedFoodAmount, setReplacedFoodAmount] = useState("");
  const [replacementFood, setReplacementFood] = useState("");
  const [newFood, setNewFood] = useState({
    replaced: [],
    replacement: [],
    isFromWhichFoodPage: "",
  });

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
    let groupList = [];
    dataBase.forEach((element) => {
      let isGroupInList = groupList.includes(element.group);
      if (!isGroupInList) {
        groupList.push(element.group);
      }
    });

    setFoodGroupList(groupList);
  }

  useEffect(() => {
    getFoodGroupList();
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route path="/foodReplaceList" element={<FoodReplaceList />} />
            <Route path="/amountCalculator" element={<AmountCalculator />}>
              <Route
                path="/amountCalculator"
                element={
                  <WhichFood
                    dataBase={dataBase}
                    replacedFood={replacedFood}
                    foodGroupList={foodGroupList}
                    updateStateInfo={updateStateInfo}
                  />
                }
              />
              <Route
                path="/amountCalculator/howMany"
                element={
                  <HowMany
                    replacedFood={replacedFood}
                    replacedFoodAmount={replacedFoodAmount}
                    updateStateInfo={updateStateInfo}
                    newFood={newFood}
                  />
                }
              />
              <Route
                path="/amountCalculator/replacementFood"
                element={
                  <ReplacementFood
                    dataBase={dataBase}
                    replacedFood={replacedFood}
                    replacementFood={replacementFood}
                    foodGroupList={foodGroupList}
                    updateStateInfo={updateStateInfo}
                    newFood={newFood}
                  />
                }
              />
              <Route
                path="/amountCalculator/newFood"
                element={
                  <NewFood
                    dataBase={dataBase}
                    foodGroupList={foodGroupList}
                    updateNewFood={updateNewFood}
                    newFood={newFood}
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
                    dataBase={dataBase}
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
