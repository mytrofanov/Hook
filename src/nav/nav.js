import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {


    return (
        <div>
            <h1 className="text-left">
            <NavLink to="/navhook"> Хуки </NavLink>
            <NavLink to="/tasks" >    Задачи</NavLink>
            </h1>
        </div>
    )
}

export default Nav