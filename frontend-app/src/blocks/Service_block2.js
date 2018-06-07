import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Image } from 'react-bootstrap'

// code
export default class Service_block2 extends Component {
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
                                <li>Организовывать системы видеонаблюдения.</li>
                                <li>Проектировать и проводить монтаж систем контроля и управления доступом.</li>
                                <li>Проводить установкм охранной сигнализации на объектах любого типа.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="block_row__small">
                        <Col xs={12} md={7}>
                            <ul className="text-block">
                                <li>Проводить монтаж котельных и установку котлов отопления.</li>
                                <li>Проектировать и устанавливать вентяляционных системы.</li>
                                <li>Разрабатывать и согласовывать проекты по электроснабжению.</li>
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
