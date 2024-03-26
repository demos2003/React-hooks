import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [items] = useState([
    { id: 1, data: "my Car" },
    { id: 2, data: "my chair" },
    { id: 3, data: "my TV" },
    { id: 4, data: "my bed" },
  ]);

  const [rerender, setRerender] = useState(false);

  const toggleRerender = () => {
    setRerender(!rerender);
  };

  const computeExpensiveValue = (data) => {
    console.log("Calculating......");
    // Introduce a computational load by iterating a large number of times
    let result = data;
    for (let i = 0; i < 1000000; i++) {
      result = result.split("").reverse().join("");
    }
    return result;
  };

  // Initialize items with computed data
  const itemsWithComputedData = useMemo(() => {
    return items.map((item) => ({
      ...item,
      computedData: computeExpensiveValue(item.data),
    }));
  }, [items]);

  const divStyle = {
    backgroundColor: rerender ? "red" : "white",
  };

  return (
    <div>
      <div style={divStyle}>
        <ul>
          {itemsWithComputedData.map((item) => (
            <li key={item.id}>
              {item.data} - {item.computedData}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={toggleRerender}>Rerender</button>
    </div>
  );
};

export default UseMemo;




// import React, { useState } from "react";

// const UseMemo = () => {
//   const [items] = useState([
//     { id: 1, data: "my Car" },
//     { id: 2, data: "my chair" },
//     { id: 3, data: "my TV" },
//     { id: 4, data: "my bed" },
//   ]);

//   const [rerender, setRerender] = useState(false);

//   const toggleRerender = () => {
//     setRerender(!rerender);
//   };

//   const computeExpensiveValue = (data) => {
//     console.log("Calculating......");
//     // Introduce a computational load by iterating a large number of times
//     let result = data;
//     for (let i = 0; i < 1000000; i++) {
//       result = result.split("").reverse().join("");
//     }
//     return result;
//   };

//   // Initialize items with computed data
//   const updateComputedData = () => {
//     const updatedItems = items.map((item) => ({
//       ...item,
//       computedData: computeExpensiveValue(item.data),
//     }));
//     return updatedItems;
//   };

//   // Load items with computed data
//   const [itemsWithComputedData, setItemsWithComputedData] = useState(
//     updateComputedData()
//   );

//   useState(() => {
//     // Update items with computed data whenever 'rerender' state changes
//     setItemsWithComputedData(updateComputedData());
//   }, [rerender]);

//   const divStyle = {
//     backgroundColor: rerender ? "red" : "white",
//   };

//   return (
//     <div>
//       <div style={divStyle}>
//         <ul>
//           {itemsWithComputedData.map((item) => (
//             <li key={item.id}>
//               {item.data} - {item.computedData}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={toggleRerender}>Rerender</button>
//     </div>
//   );
// };

// export default UseMemo;
