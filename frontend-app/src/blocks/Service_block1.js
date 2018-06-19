import React, { Component } from 'react'
import { DirectLink, Element} from 'react-scroll';

// bootstrap
import { Grid, Row, Col, Image } from 'react-bootstrap'

// code
export default class Service_block1 extends Component {

    state = {
        data: []
    };

    async getTextContent() {
        try{
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/api/service1"
            );

            const data = await text_content.json();
            this.setState({data});
        } catch (e) {
            console.log(e);
        }
    }

    componentWillMount() {
        this.getTextContent()
    }

    render() {
        return (
            <Grid fluid={true}>
                <Grid className="block_row">
                    <Row>
                        <h2>
                            <Element name="service" className="element" >
                                Мы умеем.
                            </Element>
                        </h2>
                        <Col xs={12} md={7}>
                           <ul className="text-block">
                               {this.state.data.map(item => (
                                   <li>{item.service}</li>
                               ))}
                           </ul>
                        </Col>
                        <Col md={5} smHidden={true} xsHidden={true}>
                            <Image src="/blocks/service/server.png" responsive className="server_img"/>
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}
