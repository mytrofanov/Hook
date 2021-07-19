import React from "react";
import {useAlert} from "./AlertContext";

export default function Main () {
    const toggle = useAlert()
    return (
        <div>
            <h1>Привет! В примере с Context</h1>
            <button onClick={toggle.toggle} className="btn btn-success">Показать alert</button>
        </div>
    )
}