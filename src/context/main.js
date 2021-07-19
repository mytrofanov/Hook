import React from "react";
import {useAlertToggle} from "./AlertContext";

export default function Main () {
    const toggle = useAlertToggle()
    return (
        <div>
            <h1>Привет! В примере с Context</h1>
            <button onClick={toggle} className="btn btn-success">Показать alert</button>
        </div>
    )
}