import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer.tsx";
import UseMemo from "./useMemo/UseMemo.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseContext />} />
          <Route path="/useReducer" element={<UseReducer/>} />
          <Route path="/useMemo" element={<UseMemo/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
