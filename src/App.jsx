import React from "react";
import Index from "./pages/Index";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
