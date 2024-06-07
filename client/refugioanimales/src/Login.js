import React, { useState } from 'react';
import { Form, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from './img/bannerPetCare.png';
import './Register.css';

function Login(){

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
        <>
            {/* Import Bootstrap Icons */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
            />
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
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="********"
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                    <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                        <i className={showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'}></i>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>


                            <div className="text-center mt-3">
                                    <Link to={'/'}><button type="submit" class="btn btn-warning">Ingresar</button></Link>

                                    <div style={{marginTop: '10px'}}>
                                        <Link to = '/register' class="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">¿Aún no tienes una cuenta? Regístrate aquí</Link>
                                    </div>
                            </div>

                        </Form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Login;