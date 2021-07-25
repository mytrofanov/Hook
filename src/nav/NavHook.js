import React from "react";
import {NavLink} from "react-router-dom";

const NavHook = () => {


    return (
        <div>
            <button className="btn btn-warning">
                <NavLink to="/state">useState</NavLink>
            </button>
            <button className="btn btn-white">
                <NavLink to="/effect">useEffect</NavLink>
            </button>
            <button className="btn btn-warning">
                <NavLink to="/ref">useRef</NavLink>
            </button>
            <button className="btn btn-white" >
                <NavLink to="/memo">useMemo</NavLink>
            </button>
            <button className="btn btn-warning">
                <NavLink to="/callback">useCallback</NavLink>
            </button>
            <button className="btn btn-white" >
                <NavLink to="/context">useContext</NavLink>
            </button>
            <button className="btn btn-warning">
                <NavLink to="/reducer">useReducer</NavLink>
            </button>
            <button className="btn btn-white" >
                <NavLink to="/counter">useEffectCounter</NavLink>
            </button>
            <button className="btn btn-warning">
                <NavLink to="/counterRed">Counter with variable</NavLink>
            </button>
        </div>
    )
}

export default NavHook;