import React from "react";
import Layout from "./component/Layout";
import AllProductPage from "./pages/AllProductPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AllProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
