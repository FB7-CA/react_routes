import React from "react"
import ReactDOM from "react-dom"

import { HashRouter, Switch, Route, Link } from "react-router-dom"

import Home from "./components/Home"
import Lista from "./components/Lista"
import Nav from "./components/Nav"
import User from "./components/User"
import Contact from "./components/Contact"

function App(props) {
    return (
        <>
            <HashRouter>
                <nav class="nav">
                    <Link class="nav-link" to="/home">
                        Home
                    </Link>
                    <Link class="nav-link" to="/user">
                        User
                    </Link>
                    <Link class="nav-link" to="/lista">
                        Lista
                    </Link>
                    <Link class="nav-link" to="/contact">
                        Contact
                    </Link>
                </nav>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/lista">
                        <Lista />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                </Switch>
            </HashRouter>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
