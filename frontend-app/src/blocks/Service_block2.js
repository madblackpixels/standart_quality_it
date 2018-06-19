import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Image } from 'react-bootstrap'

// code
export default class Service_block2 extends Component {

    state = {
        data_1: [],
        data_2: []
    };

    async getTextContent_1() {
        try{
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/api/service2"
            );

            const data_1 = await text_content.json();
            this.setState({data_1});
        } catch (e) {
            console.log(e);
        }
    }

    async getTextContent_2() {
        try{
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/api/service3"
            );

            const data_2 = await text_content.json();
            this.setState({data_2});
        } catch (e) {
            console.log(e);
        }
    }

    componentWillMount() {
        this.getTextContent_1()
        this.getTextContent_2()
    }

    render() {
        return (
            <Grid fluid={true} className="background__lite-gray">
                <Grid className="block_row">
                    <Row className="block_row__small">
                        <Col md={5} smHidden={true} xsHidden={true}>
                            <Image src="/blocks/service/camera.png" className="camera_img" responsive />
                        </Col>
                        <Col xs={12} md={7}>
                            <ul className="text-block">
                                {this.state.data_1.map(item => (
                                   <li>{item.service}</li>
                               ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="block_row__small">
                        <Col xs={12} md={7}>
                            <ul className="text-block">
                                {this.state.data_2.map(item => (
                                   <li>{item.service}</li>
                               ))}
                            </ul>
                        </Col>
                        <Col md={5} smHidden={true} xsHidden={true}>
                            <Image src="/blocks/service/air.png" className="air_img" responsive />
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}
