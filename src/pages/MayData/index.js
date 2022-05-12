import React from 'react'
import Header from '../../components/template/Header'
import Todo from '../../components/Todo/Todo'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'





function MayData(props) {

    return (
        <>
            <Header />
            
            <Container>
                <Row>
                    <Col><h1>Meus Dados</h1></Col>
                </Row>
                <Row>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" placeholder="Digite Seu nome" />
                </Row>
            </Container>
        </>
    )
}

export default MayData