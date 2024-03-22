import React, { useContext } from "react";
import { ThemeContext } from "./context";
import Page1 from "./Page1";
import Page2 from "./Page2";

const CentralPage = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Page1 />
      <Page2 />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default CentralPage;
