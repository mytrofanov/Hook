import React from "react";
import {useAlertReducer} from "./AlertContextReducer";

export default function MainReducer () {
    const {show} = useAlertReducer()
    return (
        <div>
            <h1>Привет! В примере с Context</h1>
            <button onClick={()=>show('Этот текст из mainReducer.js')} className="btn btn-success">Показать alert</button>
        </div>
    )
}