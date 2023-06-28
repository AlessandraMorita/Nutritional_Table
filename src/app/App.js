import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import FoodReplaceList from "../pages/foodReplaceList/FoodReplaceList";
import AmountCalculator from '../pages/amountCalculator/AmountCalculator';
import Root from "../components/root";
import HomePage from "../pages/homePage/HomePage";

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} >
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route path="/foodReplaceList" element={<FoodReplaceList />} />
    <Route path="/amountCalculator" element={<AmountCalculator />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
