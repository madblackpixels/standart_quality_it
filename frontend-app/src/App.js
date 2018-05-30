import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './pages/Main'

// code
export default class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Main />
                </div>
            </Router>
        )
    }
}
