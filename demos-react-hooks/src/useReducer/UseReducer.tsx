import React, {useReducer} from 'react'


interface State{
  count: number;
  error: string | null;
}

interface Action{
  type: "Increment" | "Decrement"
}

function reducer (state:State, action:Action){
  const {type} = action;

  switch(type){
    case "Increment" :{
      const newCount = state.count +1;
      const hasError = newCount > 5;
      return {...state, count:hasError ? state.count : newCount, 
      error: hasError ? "maximum reached" : null,
      }
      
    }
    case "Decrement" :{
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {...state, count:hasError ? state.count : newCount, 
      error: hasError ? "Minimum reached" : null,
      }
    }
    default:
      return state;
  }
}



const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
      count: 0,
      error: null,
    });
  return (
    <div>
      <div>Counter: {state.count}</div>
      {state.error && <div>{state.error}</div>}
      <button onClick={() => dispatch({type:'Increment'})}>
           Increment
      </button>
      <button onClick={() => dispatch({type:"Decrement"})}>
            Decrement
      </button>
    </div>
  )
}

export default UseReducer