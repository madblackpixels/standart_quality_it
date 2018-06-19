import React, { Component } from 'react'

//blocks
import Intro            from '../blocks/Intro'
import Service_block1   from '../blocks/Service_block1'
import Service_block2   from "../blocks/Service_block2"
import Team             from "../blocks/Team"
import ContactUs        from "../blocks/ContactUs"
import Footer           from "../blocks/Footer"

// bootstrap
import { Grid } from 'react-bootstrap'

// code
export default class Main extends Component {
    render() {
        return (
            <Grid fluid={true} className="main-grid">
                <Intro/>
                <Service_block1/>
                <Service_block2/>
                <Team />
                <ContactUs endpoint="api/lead/"/>
                <Footer/>
            </Grid>
        )
    }
}
