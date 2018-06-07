import React, { Component }   from 'react';
import { DirectLink, Element} from 'react-scroll';

import LazyHero from 'react-lazy-hero';

// bootstrap
import { Jumbotron, Grid, Row } from 'react-bootstrap';

// code
export default class Intro extends Component {
    render() {
        return (
            <LazyHero imageSrc="/blocks/intro/intro.png" minHeight={"140vh"} parallaxOffset={500} opacity={0.1} className="intro">
                <Jumbotron>
                    <Grid className="block_row intro_row">
                        <Row>
                            <Element name="intro" className="element" >
                                <h1>СТАНДАРТ КАЧЕСТВА ИТ</h1>
                            </Element>
                            <h2 className="intro_h2">проектирование программного обеспечения и слаботочных систем</h2>
                        </Row>
                    </Grid>
                </Jumbotron>
            </LazyHero>
        )
    }
}
