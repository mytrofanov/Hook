import React, {useState, useEffect} from "react";


function Effect() {

    const [type, setType] = useState('users')
    console.log('component render')

    // useEffect( ()=>{
    //     console.log('render')
    // }) при таком написании useEffect рендериться каждый раз, вместе с Арр т.е. при нажатии любой кнопки


    //если мы установим зависимости, то useState будет работать только когда нам нужно:
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
        return () => {
            console.log('clean type') //заглушка, сюда можно вставить клинер для слушателя мыши
        }
    }, [type]) //теперь он рендериться только, когда меняется тип

    const [pos, setPos] = useState({x: 0, y: 0})
    const mouseMoveReference = ev => {
        setPos({
            x: ev.clientX,
            y: ev.clientY
        })
    }
    useEffect(() => {
        console.log('componentDinMount')
        window.addEventListener('mousemove', mouseMoveReference)
        return () => {
            window.removeEventListener('mousemove', mouseMoveReference) //так можно отключить слушателя мыши
        }

    }, []) //из-за зависимости от пустого массива, эта функция рендериться только раз при запуске,
    // без этого она будет рендерится при любом изменении (любое нажатие кнопки)


    return (
        <div>
            <h1>Пример Хука useEffect</h1>
            <h1>Ресурс: {type}</h1>
            <button onClick={() => setType('users')} className="btn btn-success">Пользователи</button>
            <button onClick={() => setType('todos')} className="btn btn-warning">Todos</button>
            <button onClick={() => setType('posts')} className="btn btn-danger">Посты</button>
            <div>
                выводим координаты мыши:
                <pre>{JSON.stringify(pos, null, 2)}</pre>
            </div>
            массив данных:
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    );
}

export default Effect;
