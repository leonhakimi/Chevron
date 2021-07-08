import ReactDOM from "react-dom";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProvideAuth, useAuth } from "./use-auth.js";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import axios from "axios";

export default function App() {
    return (
        <ProvideAuth>
            <Router>
                <div>
                    <Navbar />

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/"></Route>
                    </Switch>
                </div>
            </Router>
        </ProvideAuth>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
