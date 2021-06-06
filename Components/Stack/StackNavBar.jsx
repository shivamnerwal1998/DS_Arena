import React from "react";
import "./StackNavBar.css" ;
const StackNavBar = () => {
    const elem = <>
        <ul className="StUl">
            <h2>Stack</h2>
            <li><a className="StLink" href="#home">Push</a></li>
            <li><a className="StLink" href="#news">Pop</a></li>
            <li><a className="StLink" href="#contact">peek</a></li>
            <li><a className="StLink" href="#about">Complete Program</a></li>
        </ul>
    </>
    return elem;
}
export default StackNavBar;