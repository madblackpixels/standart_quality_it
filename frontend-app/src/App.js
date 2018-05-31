import React, { Component } from 'react'

// pages
import Main from './pages/Main'

// blocks
import Header  from './blocks/Header'
import MenuBar from './blocks/MenuBar'

// code
export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
    }

    updateData(config) {
        this.setState(config)
    }

    render() {
        return(
            <div>
                <Header showMenu={this.updateData.bind(this)} />
                <MenuBar isOpen={this.state.isOpen} />
                <Main />
            </div>
        )
    }
}
