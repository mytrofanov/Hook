import React from "react";
import './App.css';
import State from "./state/State";
import Effect from "./effect/effect";
import UseRefFunction from "./ref/FunctionUseRef";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./nav/nav";
import Memo from "./memo/memo";
import CallBack from "./callBack/CallBack";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Route path='/state' component={State}/>
                <Route path='/effect' component={Effect}/>
                <Route path='/ref' component={UseRefFunction}/>
                <Route path='/memo' component={Memo}/>
                <Route path='/callback' component={CallBack}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
