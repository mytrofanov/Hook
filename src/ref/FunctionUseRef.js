import React, {useState, useEffect, useRef} from "react";


function UseRefFunction() {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)

    useEffect(() => {
        renderCount.current++
        //setRenderCount(prev => prev + 1) - так не работает
        //если не будет зависимости, функция зациклится (+1рендер+1рендер) или нужно вынести переменную за state
        //или использовать useRef - оне не будет рендериться каждый раз, мы обращаемся не к переменной
        //а к ее состоянию
        console.log(inputRef.current.value)
    })
    const focus = () => inputRef.current.focus()
    return (
        <div>
            <h1>Количество рендеров {renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={event => setValue(event.target.value)} value={value}/>
            <div>{value}</div>
            <button className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
    );
}

export default UseRefFunction;
