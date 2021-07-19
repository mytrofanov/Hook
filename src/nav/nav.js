import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {


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
        </div>
    )
}

export default Nav