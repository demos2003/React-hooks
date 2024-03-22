import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "./useContext/UseContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseContext />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
