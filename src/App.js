import React from "react";
import './App.css';
import State from "./state/State";
import Effect from "./effect/effect";
import UseRefFunction from "./ref/FunctionUseRef";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./nav/nav";
import Memo from "./memo/memo";
import CallBack from "./callBack/CallBack";
import ContextFunction from "./context/context";
import ReducerFunction from "./reducer/contextReducer";

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
                <Route path='/context' component={ContextFunction}/>
                <Route path='/reducer' component={ReducerFunction}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
