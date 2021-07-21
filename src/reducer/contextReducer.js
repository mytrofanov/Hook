import React from "react";
import Main from "./mainReducer";
import Alert from "./Alert";
import {AlertProvider} from "./AlertContextReducer";



function ReducerFunction() {

    return (
            <AlertProvider>
            <div className={'container pt-3'}>
                <h1 className="text-center">Пример Хука useReducer, все файлы взяты из примера с useContext</h1>

                <Alert/>
                <Main toggle = {()=>{}}/>

            </div>
            </AlertProvider>
    )
}

export default ReducerFunction