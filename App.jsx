/*
    All the Components which are rendered by clicking from 
    AllCont document are rendered from this page 
*/
import React from "react" ;
import Stack from "./Components/Stack/Stack" ;
import AllCont from "./AllCont";
import NavBar from "./NavBar/NavBar" ; 
import {Switch,Route} from "react-router-dom" ;


  
const App = () => {
    const elem = <div className="Divv">
        <NavBar/>
        <Switch>
        <Route exact path="/" component={AllCont}/>
        <Route exact path="/Stack" component={Stack}/>
        </Switch>
    </div>
    return elem ;
}
export default App ; 