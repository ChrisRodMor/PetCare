// Register.js
import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import banner from './img/bannerPetCare.png';

import './Register.css';

function Register() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',
        birthDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Register(form);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (

        <div class = "fondo">
            <Container className="d-flex justify-content-center align-items-center vh-100">

                <div className="register-form">
                    <Form onSubmit={handleSubmit}>

                        <div className="text-center">
                            <img src={banner} alt='banner' className='img-fluid' style={{width:'50%'}} />
                            <h5>Regístrate</h5>
                        </div>

                        <Form.Group controlId="formName">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Ingrese su nombre..."
                                value={form.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        
                        <div class="d-flex justify-content-center">
                            <Form.Group controlId="formEmail" style={{ width: '48%', marginRight:'5%'}}>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhone" style={{ width: '48%'}}>
                                <Form.Label>Celular</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    placeholder="+52 XXX XXX XXXX"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="********"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                placeholder="********"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                placeholder="Lorem ipsum sit amet isidru"
                                value={form.address}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBirthDate">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control
                                type="date"
                                name="birthDate"
                                value={form.birthDate}
                                onChange={handleChange}
                            />
                        </Form.Group>


                        <div className="text-center mt-3">   
                                <button type="button" class="btn btn-outline-warning btn-sm btn-block" style={{marginRight: '5%'}}>Cancelar</button>
                                <button type="submit" class="btn btn-warning btn-sm btn-block">Aceptar</button>
                                <div>
                                    <a href="" class="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">¿Ya tienes una cuenta? Inicia sesión aquí</a>
                                </div>
                        </div>
                        
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;
