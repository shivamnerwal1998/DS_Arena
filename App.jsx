import Home from "../src/Home/Home";
import About from "./About";
import Content from "./Contents/Content";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "../src/NavBar/NavBar";
const App = () => {
    const elem = <div className="text-center">
        <Nav />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Content" component={Content} />
            <Route exact Path="/about" component={About} />

        </Switch>
    </div>
    return elem;

}
export default App;