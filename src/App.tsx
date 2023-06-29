import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./component/Create";
import Details from "./component/Details";
import NotFound from "./component/NotFound";
import Card from "./component/Card";

function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
