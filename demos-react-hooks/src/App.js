import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer.tsx";
import UseMemo from "./useMemo/UseMemo.jsx";
import UseRef from "./useRef/UseRef.jsx";
import UseEffect from "./useEffect/UseEffect.jsx";
import UseState from "./useState/UseState.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseContext />} />
          <Route path="/useReducer" element={<UseReducer/>} />
          <Route path="/useMemo" element={<UseMemo/>}/>
          <Route path="/useRef" element={<UseRef/>}/>
          <Route path="/useEffect" element={<UseEffect/>}/>
          <Route path="/useState" element={<UseState/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
