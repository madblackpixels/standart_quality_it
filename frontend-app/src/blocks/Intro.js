import React, { Component }   from 'react';
import { DirectLink, Element} from 'react-scroll';

import LazyHero from 'react-lazy-hero';

// bootstrap
import { Jumbotron, Grid, Row } from 'react-bootstrap';

// code
export default class Intro extends Component {

    state = {
        data: []
    };

    async getTextContent() {
        try{
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/api/intro"
            );

            const json_data = await text_content.json();
            const data = json_data[0];

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
            <LazyHero imageSrc="/blocks/intro/intro.png" minHeight={"140vh"} parallaxOffset={500} opacity={0.1} className="intro">
                <Jumbotron>
                    <Grid className="block_row intro_row">
                        <Row>
                            <Element name="intro" className="element" >
                                <h1>{this.state.data.header}</h1>
                            </Element>
                            <h2 className="intro_h2">{this.state.data.sub_header}</h2>
                        </Row>
                    </Grid>
                </Jumbotron>
            </LazyHero>
        )
    }
}
