import React, {useState} from "react";


function State() {

    function computeCounter() {
        console.log("Here we have some calculations")   //для демонстрации сколько раз рендериться функция
        return Math.trunc(Math.random() * 20)
    }

    // const [counter, setCounter] = useState(0) - так функция computeCounter будет рендериться полностью т.е. и console.log
    // и вычисления, даже если это нам не нужно

    const [counter, setCounter] = useState(() => {
        return computeCounter()                  // так мы экономим на вычислениях, рендерим только вычисления return Math.trunc(Math.random()*20)
    })

    function add() {
        setCounter(counter + 1)
        setCounter(counter + 1) //эта строка не будет рендериться, будет прирост только на +1
    }

    function reduction() {
        setCounter(counter - 1)
    }

    function double() {
        setCounter(prev => prev + 1)
        setCounter(prev => prev + 1) //только обращаясь к предыдущему состоянию можно вызвать useState два раза
    }

    // обрабатываем объекты
    let [state, setState] = useState(
        {
            title: 'Счетчик',
            date: Date.now()
        }
    )

    function updateTitle() {
        setState(prev => {
            return {
                ...state,  //мы просим вернуть весь объект
                title: 'Новое название' // и изменить только эту строку
            }
        })
    }

    // обрабатываем объекты


    return (
        <div>
            <h1>Пример Хука useState</h1>
            <h1>Счетчик: {counter}</h1>
            <button onClick={add} className="btn btn-success">Добавить</button>
            <button onClick={reduction} className="btn btn-danger">Удалить</button>
            <button onClick={double} className="btn btn-warning">Увеличивать по 2</button>


            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
            <button onClick={() => setState({title: 'новое название'})} //так мы меняем весь объект удаляя дату
                    className="btn btn-warning">Изменить название
            </button>

            <button onClick={updateTitle} //так мы меняем только название
                    className="btn btn-success">Правильно изменить название
            </button>
        </div>
    );
}

export default State;
