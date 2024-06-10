import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Navbarcliente from './Navbarcliente';
import cuyo from './img/cuyo.jpeg';
import gato from './img/gato.jpg';
import perro from './img/perro.jpg';
import PetCard from './PetCard';

function Adoptar() {
    return (
        <div>
            <Navbarcliente/>
            <Container>
                <div className='mt-5 d-flex'>
                    <div className='me-auto'>
                        <h1 className="h1">Refugio</h1>
                    </div>
                    <div className='d-flex'>
                        <Form className="d-flex align-items-end">
                            <Form.Group className="mb-3 me-2" controlId="formNombre">
                                <Form.Label>Mascota</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3 me-2" controlId="formAnimal">
                                <Form.Label>Tipo de Animal</Form.Label>
                                <Form.Select>
                                    <option>Seleccione un tipo</option>
                                    <option>Perros</option>
                                    <option>Gatos</option>
                                    <option>Cuyos</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 me-2" controlId="formRaza">
                                <Form.Label>Raza</Form.Label>
                                <Form.Select>
                                    <option>Seleccione una raza</option>
                                    <option>Raza 1</option>
                                    <option>Raza 2</option>
                                    <option>Raza 3</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn btn-warning mb-3">Buscar</Button>
                        </Form>
                    </div>
                </div>
                <hr className='my-3' style={{ borderTop: '2px solid #D2D5D8'}}></hr>
                <div>
                    <Row>
                        <Col>
                            <PetCard
                                name="Botas"
                                image={gato}
                                linkTo="/mascota/botas"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Felix"
                                image={cuyo}
                                linkTo="/mascota/Felix"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Kai"
                                image={perro}
                                linkTo="/mascota/Kai"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PetCard
                                name="Botas"
                                image={gato}
                                linkTo="/mascota/botas"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Felix"
                                image={gato}
                                linkTo="/mascota/Felix"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Kai"
                                image={perro}
                                linkTo="/mascota/Kai"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PetCard
                                name="Botas"
                                image={gato}
                                linkTo="/mascota/botas"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Felix"
                                image={gato}
                                linkTo="/mascota/Felix"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Kai"
                                image={perro}
                                linkTo="/mascota/Kai"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PetCard
                                name="Botas"
                                image={gato}
                                linkTo="/mascota/botas"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Felix"
                                image={gato}
                                linkTo="/mascota/Felix"
                            />
                        </Col>
                        <Col>
                            <PetCard
                                name="Kai"
                                image={perro}
                                linkTo="/mascota/Kai"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Adoptar;
