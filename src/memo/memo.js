import React, {useEffect, useMemo, useState} from 'react'

function complexCompute(num) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++  //этим циклом замедляем рендеринг
    return num * 2
}

function Memo() {
    const [number, setNumber] = useState(42)
    //const computed = complexCompute(number); так замедляется вся страница
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    const [colored, setColored] = useState(false)
   // const styles = {color: colored ? 'yellow' : 'black'} - так будут тормозить расчеты из-за useEffect ниже
    const styles = useMemo(()=>({
        color: colored ? 'yellow' : 'black'
    }),[colored])  //так мы закешировали стили и они будут вызываться только при изменении colored

    useEffect(() => {
        console.log('styles changed')
    }, [styles])
    return (
        <div>
            <h1 className="text-center">Пример Хука useMemo</h1>
            <h1 style={styles}>Вычисляемое свойство {computed} - вычисления замедленны циклом</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-warning" onClick={() => setNumber(prev => prev - 1)}>Удалить</button>
            <button className="btn btn-danger" onClick={() => setColored(prev => !prev)}>Изменить цвет</button>
            <div>
                Без Хука useMemo изменение цвета замедляется одновременно с расчетами
            </div>
            <div>
                также расчеты замедляются на рендер изменение цвета
            </div>
        </div>
    )
}

export default Memo