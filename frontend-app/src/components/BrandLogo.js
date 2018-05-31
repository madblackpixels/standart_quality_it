import React, { Component } from 'react'

import { Image } from 'react-bootstrap'


// code
export default class BrandLogo extends Component {
    render() {
        return(
            <a href={'/'}>
                <Image src="/system/logo.png" className="brand-logo__header" />
            </a>
        )
    }
}