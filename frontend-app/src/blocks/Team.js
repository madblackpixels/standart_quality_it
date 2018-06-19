import React, { Component }   from 'react'
import { DirectLink, Element} from 'react-scroll';
import LazyHero from 'react-lazy-hero';

// bootstrap
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

// code
export default class Team extends Component {

    state = {
        data: []
    };

    async getTextContent() {
        try{
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/api/about"
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
            <Grid fluid={true}>
                <LazyHero imageSrc="/blocks/team/team.jpg" minHeight="70vh" parallaxOffset="0" opacity="0.3" className="rer">
                    <Jumbotron className="team-block">
                        <h2>
                            <Element name="team" className="element" >
                                О нас.
                            </Element>
                            <div className="team-block__text">
                                <Grid>
                                    <Row>
                                        <Col xs={12} >
                                            {this.state.data.about}
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </h2>
                    </Jumbotron>
                </LazyHero>
            </Grid>
        )
    }
}
