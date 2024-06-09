// Register.js
import React, { useState, useEffect } from 'react';
import { Form, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from './axios-config';
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

    useEffect(() => {
        // Función para obtener el token CSRF al cargar el componente
        initializeCsrfProtection();
    }, []);


    const initializeCsrfProtection = async () => {
        try {
            await axiosInstance.get('/sanctum/csrf-cookie');
        } catch (error) {
            console.error('Error initializing CSRF protection:', error);
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            password: form.password,
            confirmPassword: form.confirmPassword,
            address: form.address,
            birthDate: form.birthDate,
        };

        try {
            const response = await axiosInstance.post('/api/register', data);
            console.log('Registro exitoso: ', response.data);
        } catch (error) {
            console.error('Error:', error);
            console.error('Detailed:', error.message);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <>
            {/* Import Bootstrap Icons */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
            />

            <div className="fondo">
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
                            
                            <div className="d-flex justify-content-center">
                                <Form.Group controlId="formEmail" style={{ width: '48%', marginRight: '5%' }}>
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="example@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPhone" style={{ width: '48%' }}>
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="624 123 4546"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>

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

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        placeholder="********"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <InputGroup.Text onClick={toggleConfirmPasswordVisibility} style={{ cursor: 'pointer' }}>
                                        <i className={showConfirmPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'}></i>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formAddress">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder="Av. conchalito 24 col correcaminos 123"
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
                                <Link to='/login'>
                                    <button type="button" className="btn btn-outline-warning btn-sm btn-block" style={{ marginRight: '5%' }}>Cancelar</button>
                                </Link>
                                <button type="submit" className="btn btn-warning btn-sm btn-block">Aceptar</button>
                                
                                <div style={{ marginTop: '10px' }}>
                                    <Link to='/login' className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        ¿Ya tienes una cuenta? Inicia sesión aquí
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Register;