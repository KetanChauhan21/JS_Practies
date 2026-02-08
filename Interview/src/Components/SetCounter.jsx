import React, { useEffect, useState } from 'react'

const SetCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 10) {
                    clearInterval(intervalId);
                    return prev;
                }
                return prev + 1;
            })
        }, 1000)
        console.log("componoent is mount")
        return () => {
            clearInterval(intervalId);
        };
    }, )

    return (
        <>
            <div>
                {/* <button onClick={()=> setCounter((prev)=> prev+1)}>increment</button> */}
                {/* <button onClick={()=> setCounter((prev)=> prev-1)}>Decrement</button> */}
                <p>{counter}</p>
            </div>
        </>
    )
}

export default SetCounter
