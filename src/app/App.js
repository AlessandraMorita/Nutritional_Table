import React from "react";
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
import ReplacementFood from "../pages/amountCalculator/components/replacementFood/ReplacementFood";
import Results from "../pages/amountCalculator/components/results/Results";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route path="/foodReplaceList" element={<FoodReplaceList />} />
            <Route path="/amountCalculator" element={<AmountCalculator />}>
              <Route path="/amountCalculator/whichFood" element={<WhichFood />} />
              <Route path="/amountCalculator/howMany" element={<HowMany />} />
              <Route path="/amountCalculator/replacementFood" element={<ReplacementFood />} />
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
