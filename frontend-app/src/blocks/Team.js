import React, { Component }   from 'react'
import { DirectLink, Element} from 'react-scroll';
import LazyHero from 'react-lazy-hero';

// bootstrap
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

// code
export default class Team extends Component {
    render() {
        return (
            <Grid fluid={true}>
                <LazyHero imageSrc="/blocks/team/team.jpg" minHeight="70vh" parallaxOffset="0" opacity="0.3" className="rer">
                    <Grid className="block_row">
                     <Row>
                         <Col xs={12}>
                             <Jumbotron className="team-block">
                                 <h2>
                                    <Element name="team" className="element" >
                                        О нас.
                                    </Element>
                                 </h2>
                                 <div className="team-block__text">
                                    Мы работаем, опираясь на лучшие практики и
                                     собственный разносторонний опыт. Мы знаем все про
                                     слаботочные системы и всегда готовы Вам помочь.
                                     Мы разбираемся в технологиях и трендах ИТ, интернета, а также инженерных систем.
                                 </div>
                             </Jumbotron>
                         </Col>
                     </Row>
                 </Grid>
                </LazyHero>
            </Grid>
        )
    }
}
