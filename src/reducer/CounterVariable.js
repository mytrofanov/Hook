import React, {useState, useEffect, useReducer} from "react";


function CounterVariable() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + step);
        }, 1000);
        return () => clearInterval(id);
    }, [step]);
    return (
        <div>
            <h1 className="text-center"> Прирост зависит от переменной step</h1>
            <h1>{count}</h1>
            <input value={step} onChange={event => setStep(Number(event.target.value))}/>
        </div>
    )
}

export default CounterVariable;