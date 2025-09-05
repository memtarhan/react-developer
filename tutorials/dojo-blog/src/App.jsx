import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </>
        </Router>
    )
}

export default App
