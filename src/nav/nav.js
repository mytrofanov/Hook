import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {


    return (
        <div>
            <button className="btn btn-warning">
                <NavLink to="/state">useState</NavLink>
            </button>
            <button className="btn btn-success">
                <NavLink to="/effect">useEffect</NavLink>
            </button>
            <button className="btn btn-warning">
                <NavLink to="/ref">useRef</NavLink>
            </button>
        </div>
    )
}

export default Nav