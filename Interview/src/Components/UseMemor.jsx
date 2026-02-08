import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [val, setVal] = useState(0);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };
    const calculation = useMemo(()=> expensiveCalculation(2),[]);


    return (
        <div>
            <button onClick={() => setVal(prev => prev + 1)}>
                Increase
            </button>

            <p>Counter: {val}</p>
            <p>Value: {calculation}</p>
        </div>
    );
};

export default UseMemo;
