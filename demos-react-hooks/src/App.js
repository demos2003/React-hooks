import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer.tsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseContext />} />
          <Route path="/useReducer" element={<UseReducer/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
