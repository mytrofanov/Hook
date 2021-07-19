import React from "react";
import Main from "./main";
import Alert from "./Alert";
import {AlertProvider} from "./AlertContext";



function ContextFunction() {

    return (
            <AlertProvider>
            <div className={'container pt-3'}>
                <h1 className="text-center">Пример Хука useContext</h1>

                <Alert/>
                <Main toggle = {()=>{}}/>

            </div>
            </AlertProvider>
    )
}

export default ContextFunction