import React, { Component } from 'react'
import { DirectLink, Element} from 'react-scroll';

// bootstrap
import { Grid, Row, Col, Image } from 'react-bootstrap'

// code
export default class Service_block1 extends Component {
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
                               <li>Проводить аудит существующих решений.</li>
                               <li>Проектировать ИТ инфраструткуру для вашего бизнеса.</li>
                               <li>Вести прозрачную разработку.</li>
                               <li>Внедрять и поддерживать ПО в процессе эксплуатации.</li>
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
