import React, {useState, useEffect} from "react";

function EffectCounter() {
    const [count, setCount] = useState(990);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c=>c+1);
            console.log(id);
        }, 1000);
        return () => clearInterval(id);
    }, [count]);
    return (
        <div>
            <h1>Счетчик: {count}</h1>

        </div>
    );
}

export default EffectCounter;