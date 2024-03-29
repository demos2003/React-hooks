import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const [response, setResponse] = useState('posts');
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${response}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [response])
    return (
        <div>
            <button onClick={() => setResponse('posts')}>post</button>
            <button onClick={() => setResponse('users')}>users</button>
            <button onClick={() => setResponse('comments')}>comments</button>

            <h2>{response}</h2>

            {
                items.map((item) => {
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }

            {/* {json} */}
        </div>
    )
}

export default UseEffect