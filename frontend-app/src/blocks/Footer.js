import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Image } from 'react-bootstrap'

// code
export default class Footer extends Component {
    render() {
        return (
            <Grid fluid={true} className="footer">
                <Grid className="footer-row">
                    <Row>
                        <div className="footer-text">
                            2018, ООО "СТАНДАРТ КАЧЕСТВА ИТ" created by <a href="https://madblackpixels.com">MadBlackPixels</a>
                        </div>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}
