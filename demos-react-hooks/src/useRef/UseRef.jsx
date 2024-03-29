import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [number, setNumber] = useState(0);

    const input1 = useRef();
    const input2 = useRef();

    const getinput1 = () => {
        console.log("This is for input 1");
        console.log(input1.current);
        input1.current.style.backgroundColor = "yellow"


    }


    const getinput2 = () => {

        console.log("This is for input 2")
        console.log(input2.current);
        input2.current.style.backgroundColor = "purple"

    }
    return (
        <div>
            <h2>UseRef</h2>
            <input ref={input1} style={{backgroundColor:"red"}} type='number' value={number} onChange={e => setNumber(e.target.value)} />
            <input ref={input2} style={{backgroundColor:"green"}} type='text' value={number} onChange={e => setNumber(e.target.value)} />


            <div>
                <button onClick={() => getinput1()}>Input 1</button>
                <button onClick={() => getinput2()}>Input 2</button>
            </div>
        </div>
    )
}

export default UseRef