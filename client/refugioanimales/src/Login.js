import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import banner from './img/bannerPetCare.png';
import './Register.css';

function Login(){

    const [form, setForm] = useState({
        email: '',
        password: ''
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
            const response = await Login(form);
            console.log(response.data);
            // Guarda el token en el almacenamiento local o en el contexto
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return(
        <div class = "fondo">
            <Container className="d-flex justify-content-center align-items-center vh-100">

                <div className="register-form">
                    <Form onSubmit={handleSubmit}>

                        <div className="text-center">
                            <img src={banner} alt='banner' className='img-fluid' style={{width:'80%'}} />
                            <h5>Iniciar Sesión</h5>
                        </div>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="example@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

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


                        <div className="text-center mt-3">

                                <button type="button" class="btn btn-outline-warning" style={{marginRight: '10%'}}>Cancelar</button>
                                <button type="submit" class="btn btn-warning">Aceptar</button>

                                <div>
                                    <a href="" class="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">¿Aún no tienes una cuenta? Regístrate aquí</a>
                                </div>
                        </div>

                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Login;