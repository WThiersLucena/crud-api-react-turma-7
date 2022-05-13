import React, { useState } from 'react'

import {
    Container, ListGroup, Row,
    Col, Table, ButtonGroup, Button
} from 'react-bootstrap'

function ClienteList(props) {

    const clientes = props.clientes || []
    const [cliente, setCliente] = useState({});



    const renderCliente = () => {
        return clientes.map((item) => {
            return (

                <ListGroup.Item key={item.id}>
                    <Row className="itemClientes">
                        <Col xs={6} md={8}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>CPF</th>
                                        <th>Tel</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.document}</td>
                                        <td>{item.tel}</td>
                                        <td >
                                            
                                            <Button variant="primary">Alterar</Button>{' '}


                                            <Button variant="secondary">Deletar</Button>{' '}
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>


                    </Row>
                </ListGroup.Item>
            )
        })
    }

    return (
        <Container>

            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {renderCliente()}
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    )
}

export default ClienteList