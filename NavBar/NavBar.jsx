import "./NavBar.css" ;
import {NavLink} from "react-router-dom";
const NavBar = ()=>{
    const elem=<div className="NavContainer">
    
<ul className="Lis">
  <li><NavLink className="Home"  to="/">Home</NavLink></li>
  <li><NavLink className="Cont"  to="/Cont">Content</NavLink></li>
  <li><a className="Cont" href="#contact">Contact</a></li>
  <li><a className="Cont" href="#about">About</a></li>
</ul>

    </div>
    return elem; 
}
export default NavBar ; 