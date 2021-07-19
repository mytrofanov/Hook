import React, {useCallback, useState} from "react";
import ItemList from "./ItemList";

function CallBack() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)
    const styles = {
        color: colored ? 'yellow' : 'black'
    }
    const generateItemsFromApi = useCallback( () => {
        return new Array(count).fill('').map(( _,i )=> `Элемент ${i+1}`)
    },[count])

    return (
        <div>
            <h1 className="text-center">Пример Хука useCallback</h1>
            <h1 style={styles}>Количество элементов: {count} </h1>
            <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-danger" onClick={() => setColored(prev => !prev)}>Изменить цвет</button>
<div>Аналогично useMemo useCallBack кэширует пропсы и устанавливает зависимости</div>
            <ItemList getItems={generateItemsFromApi}/>
        </div>
    )
}

export default CallBack