import React, { useState } from 'react'
 import { AiFillCheckCircle } from "react-icons/ai";
import { FaCheck } from 'react-icons/fa';
import {
    Container, ListGroup, Row,
    Col, Button, Modal,
    Alert, Form, Table
} from 'react-bootstrap'



function ClienteList(props) {

    const clientes = props.clientes || []
    const [cliente, setCliente] = useState({});
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const renderCliente = () => {

        return clientes.map((item) => {
            return (

                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.document}</td>
                    <td>{item.tel}</td>
                    <td>{item.state}</td>
                    <td>
                        <Button className="mx-3" variant="secondary"
                            onClick={() => {
                                setCliente(item)
                                handleShowEdit()
                            }}>
                            Editar
                        </Button>
                        <Button className="mx-3" variant="danger"
                            onClick={() => {
                                setCliente(item)
                                handleShow()
                            }}>
                            Deletar
                        </Button>
                    </td>
                </tr>






                /*  <ListGroup.Item key={item.id}>
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
 
                                             <Button className="mx-3" variant="secondary"
                                                 onClick={() => {
                                                     setCliente(cliente)
                                                     handleShowEdit()
                                                 }}>
                                                 Editar
                                             </Button>
 
 
                                             <Button className="mx-3" variant="danger"
                                                 onClick={() => {
                                                     setCliente(cliente)
                                                     handleShow()
                                                 }}>
                                                 Deletar
                                             </Button>
                                         </td>
                                     </tr>
 
                                 </tbody>
                             </Table>
                         </Col>
 
 
                     </Row>
                 </ListGroup.Item>*/

            )
        })
    }

    return (
        <Container>

            {
                successDelete
                    ?
                    <Alert key='success' variant='success'>
                        <AiFillCheckCircle size="30" /> Cliente  apagado com suceso.
                    </Alert>
                    :
                    ''
            }
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Documento</th>
                                    <th>Telefone</th>
                                    <th>Estado</th>
                                    <th className="text-center"> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCliente()}
                            </tbody>
                        </Table>
                    </ListGroup>
                </Col>
            </Row>


            
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nome do Cliente</Form.Label>

                        <Form.Control type="text" placeholder="Digite o novo nome do cliente"

                            value={cliente.name}


                            onChange={event => setCliente({ ...cliente, name: event.target.value })}

                        />

                        <Form.Label>Idade do Cliente</Form.Label>
                        <Form.Control type="text" placeholder="Digite a idade do cliente"
                            value={cliente.age}
                            onChange={event => setCliente({ ...cliente, age: event.target.value })} />

                        <Form.Label>Documento do Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo documento"
                            value={cliente.document}
                            onChange={event => setCliente({ ...cliente, document: event.target.value })} />

                        <Form.Label>Telefone do Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo telefone"
                            value={cliente.tel}
                            onChange={event => setCliente({ ...cliente, tel: event.target.value })} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => {
                        props.editar(cliente)
                        handleCloseEdit()
                    }
                    }>
                        Editar
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* //modal delete */}
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Apagar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseja apagar Cliente : <strong>{cliente.name}</strong></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.deletar(cliente.id)
                        handleClose()
                        setSuccessDelete(true)
                        setTimeout(
                            () => {
                                setSuccessDelete(false)
                            }, 1000)
                    }}>
                        Apagar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default ClienteList