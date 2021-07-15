import React, {useState} from "react";
import './App.css';

function App() {
    const [counter, setCounter] = useState(0)

    function add  () {
        setCounter (counter+1)
    }
    function reduction () {
        setCounter(counter-1)
    }
    function double () {
        setCounter(prev => prev +1)
        setCounter(prev => prev +1) //только обращаясь к предыдущему состоянию можно вызвать useState два раза
    }
  return (
    <div>
  <h1>Счетчик: {counter}</h1>
      <button onClick={add} className="btn btn-success">Добавить</button>
      <button onClick={reduction} className="btn btn-danger">Удалить</button>
      <button onClick={double} className="btn btn-warning">Увеличивать по 2</button>
    </div>
  );
}

export default App;
