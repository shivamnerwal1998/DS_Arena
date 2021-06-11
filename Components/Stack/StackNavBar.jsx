import React from "react";
import "./StackNavBar.css";
import { NavLink } from "react-router-dom";
const StackNavBar = () => {
    const elem = <>
        <ul className="StUl">
            <h2>Stack</h2>
            <li><NavLink className="StLink" to="/stack">About</NavLink></li>
            <li><NavLink className="StLink" activeClassName="Selected" to="/stack/array">Array Representation</NavLink></li>
            <li><NavLink className="StLink" activeClassName="Selected" to="/stack/linked">Linked Representation</NavLink></li>
            <li><NavLink className="StLink" activeClassName="Selected" to="/stack/push">Push</NavLink></li>
            <li><NavLink className="StLink" activeClassName="Selected" to="/stack/pop">Pop</NavLink></li>
            <li><NavLink className="StLink" activeClassName="Selected" to="/stack/peek">peek</NavLink></li>
            <li><NavLink className="StLink" activeClassName="Selected" to="/stack/code">Complete Program</NavLink></li>
        </ul>

    </>
    return elem;
}
export default StackNavBar;