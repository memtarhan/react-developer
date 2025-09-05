import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./Create.jsx";

function App() {
    return (
        <Router>
            <>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/create">
                            <Create/>
                        </Route>
                    </Switch>
                </div>
            </>
        </Router>
    )
}

export default App
