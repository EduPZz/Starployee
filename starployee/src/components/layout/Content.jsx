import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import About from '../pages/About'
import App from '../../App'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/"> 
                <App />
            </Route>
            <Route path="/About">
                <About />
            </Route>
        </Switch>
    </main>
)

export default Content