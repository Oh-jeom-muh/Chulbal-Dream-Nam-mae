import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "pages/Start";
import Recommend from "pages/Recommend/Recommend";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/S" element={<Start />} />
        <Route path="/" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
