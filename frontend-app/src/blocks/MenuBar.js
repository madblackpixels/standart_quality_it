import React, { Component } from 'react'

import {
    Link,
    DirectLink
} from 'react-scroll'

import {
    slide as Menu
} from 'react-burger-menu'


// bootstrap
import { Nav } from 'react-bootstrap'

// code
export default class MenuBar extends Component {

    handleClick = () => {
        this.props.showMenu({
            isOpen: !this.props.isOpen
        })
    }

    render() {
        return(
            <Menu isOpen={this.props.isOpen} customBurgerIcon={false} className="background__black">
                <div className="bm-vertical-menu">
                    <Nav>
                        <p>
                            <Link to="intro" spy={true} smooth={true} duration={1500} offset={-200} onClick={this.handleClick}>Главная.</Link>
                        </p>
                        <p>
                            <Link to="service" spy={true} smooth={true} duration={1500} offset={-100} onClick={this.handleClick}>Мы умеем.</Link>
                        </p>
                        <p>
                            <Link to="team" spy={true} smooth={true} duration={1500} offset={-100} onClick={this.handleClick}>О нас.</Link>
                        </p>
                        <p>
                            <Link to="contacts" spy={true} smooth={true} duration={1500} onClick={this.handleClick}>Контакты.</Link>
                        </p>
                    </Nav>
                </div>
            </Menu>
        )
    }
}

