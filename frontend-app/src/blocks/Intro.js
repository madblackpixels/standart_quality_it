import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap'

// code
export default class Intro extends Component {

    render() {
        return (
            <Grid fluid={true} className="intro_block">
                <Jumbotron className="text-center">
                    <h1>Стандарт качества ИТ</h1>
                </Jumbotron>
            </Grid>
        )
    }
}
