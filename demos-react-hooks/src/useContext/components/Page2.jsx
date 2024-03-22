import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Page2 = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === "light" ? "white" : "black";
  const textColor = theme === "light" ? "black" : "white";

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <p>Component 2</p>

    </div>
  );
};

export default Page2;
