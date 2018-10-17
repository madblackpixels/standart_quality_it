import React, { Component } from 'react'
import { DirectLink, Element} from 'react-scroll';

// bootstrap
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'

// code
export default class ContactUs extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);


        this.state = {
            name: '',
            mail: '',
            show: false,
        };
    }

    validateName() {
        const name = this.state.name;
        if (name.match(/^([А-я ]{1}[А-я ]+)$/i)) {
            return 'success';
        }
        else if (name.match(/^()$/i)) return null;
        else return 'error';
        return null;
    }

    validateEmail() {
        const name = this.state.mail;
        if (name.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
        else if (name.match(/^()$/i)) return null;
        else return 'error';
        return null;
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }

    handleChangeMail(e) {
        this.setState({ mail: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            name: this.state.name,
            mail: this.state.mail,
        };

        //const data = new FormData(event.target);
        const sourceFile = require('../common');
        fetch(sourceFile.hostname + '/api/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        this.setState({ show: true })

    }

    render() {
        const { name, mail } = this.state;
        const isEnabled = name.match(/^([А-я ]{1}[А-я ]+)$/i) && mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return (
            <Grid fluid={true}>
                <Grid className="block_row">
                    <Row>
                        <h2>
                            <Element name="contacts" className="element" >
                                Контакты.
                            </Element>
                        </h2>
                        <div className="contact-form">
                            <form onSubmit={this.handleSubmit}>
                                <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={6} mdOffset={0}>
                                <FormGroup controlId="text" validationState={this.validateName()}>
                                    <ControlLabel>Ваше Имя:</ControlLabel>
                                       <FormControl
                                           type="text"
                                           value={this.state.name}
                                           placeholder="Имя..."
                                           onChange={this.handleChangeName}
                                       /><FormControl.Feedback/>
                                    <HelpBlock>Введите пожалуйста Имя латинскими буквами.</HelpBlock>
                                </FormGroup>
                                </Col>
                                <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={6} mdOffset={0}>
                                <FormGroup controlId="mail" validationState={this.validateEmail()}>
                                    <ControlLabel>Почта:</ControlLabel>
                                       <FormControl
                                           type="email"
                                           value={this.state.mail}
                                           placeholder="Почта..."
                                           onChange={this.handleChangeMail}
                                       /><FormControl.Feedback/>
                                    <HelpBlock>Электронная почта для связи с Вами.</HelpBlock>
                                </FormGroup>
                                </Col>
                                <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={6} mdOffset={0}>
                                     <Button type="submit" disabled={!isEnabled}>Отправить</Button>
                                </Col>
                            </form>
                        </div>
                    </Row>
                    <Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
                        <Modal.Body>
                            Спасибо, мы обязательно с Вами свяжемся.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize="small" href="/">
                                Закрыть
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>
            </Grid>
        );
    }
}
