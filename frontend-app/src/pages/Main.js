import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// code
export default class Main extends Component {

    state = {
        page_text_content: []
    };

    async componentWillMount() {
        try {
            var sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname + 
                "/"
            );
            const page_text_content = await text_content.json();
            this.setState({page_text_content});
        } catch (e) {
            console.log(e);
        }
        
    }

    render() {
        return (
            <Router>
                <div>
                    {this.state.page_text_content.map(item => (
                        <div key={item.id}>
                            <h1>{item.simple}</h1>
                        </div>
                    ))}
                    <h2>MainPage</h2>
                </div>
            </Router>
        )
    }
}
