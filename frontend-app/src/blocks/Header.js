import React, { Component } from 'react'
import Headroom from 'react-headroom'

import { Grid } from 'react-bootstrap'

// components
import MenuBtn    from '../components/MenuBtn'
import BrandLogo  from '../components/BrandLogo'


// code
export default class Header extends Component {
    render() {
        return(
            <Headroom className="headroom--pinned">
                <Grid fluid={true} className="headroom-wrapper__max_width">
                    <BrandLogo />
                    <MenuBtn showMenu={this.props.showMenu} />
                </Grid>
            </Headroom>
        )
    }
}