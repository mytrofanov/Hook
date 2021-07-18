import React, {useState} from "react";
import './App.css';
import State from "./state/State";
import Effect from "./effect/effect";
import UseRefFunction from "./ref/FunctionUseRef";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Nav from "./nav/nav";


function App() {

    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Route path='/state' component={State}/>
                <Route path='/effect' component={Effect}/>
                <Route path='/ref' component={UseRefFunction}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
