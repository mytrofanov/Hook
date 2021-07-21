import React from "react";
import {useAlertReducer} from "./AlertContextReducer";


export default function AlertReducer() {
    const alert = useAlertReducer()

    if (!alert.visible) return null

    return (
        <div className={'alert alert-danger'} onClick={alert.hide}>
            {alert.text}
        </div>
    )
}