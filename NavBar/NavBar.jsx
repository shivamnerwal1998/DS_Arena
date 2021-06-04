import React from "react";
import {NavLink} from "react-router-dom" ;

const NavBar = () => {
    const element = <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> </a>

                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink to="/" className="nav-link"
                                >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/content" className="nav-link">Content</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    </>

    return element;
}
export default NavBar;


<div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                </div>
            </div>
        </div>
