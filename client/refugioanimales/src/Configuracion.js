import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import Navbarcliente from './Navbarcliente';
import Navbaremployee from './Navbaremployee';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import ClientCardProfile from './ClientCardProfile';

function Configuracion() {
    const { authData } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (authData) {
            setFormData({
                email: authData.email,
                phone: authData.phone,
                password: '',
                address: authData.address
            });
        }
    }, [authData]);

    console.log(authData.file_path);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {};
        
        for (const key in formData) {
            if (formData[key] !== authData[key]) {
                updatedData[key] = formData[key];
            }
        }

        if (Object.keys(updatedData).length === 0) {
            console.log('No changes detected');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error('Error updating profile');
            }

            const data = await response.json();
            console.log('Profile updated successfully', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!authData) {
        return <div>Loading...</div>;
    }

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
            />
            <div>
                {authData.type === 'employee' ? <Navbaremployee /> : <Navbarcliente />}
                <Container className='col-12'>
                    <div className='mt-5 d-flex mb-5'>
                        <div className='me-auto'>
                            <h1 className="h1">Mi Perfil</h1>
                        </div>
                    </div>

                    <div className='d-flex row'>
                        <div className='col-3 me-5'>
                            <ClientCardProfile name={authData.name} file_path={authData.file_path} />
                            <input type="file" className="form-control" id="reportImage" />
                        </div>
                        <div className='col-8 mb-5'>
                            <Container className="bg-white p-5 rounded shadow col-12">
                                <Form className="d-flex flex-column justify-content-center col-12" onSubmit={handleSubmit}>
                                    <Form.Group controlId="formId" className='col-1 mb-3'>
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="text" value={authData.id} disabled />
                                    </Form.Group>
                                    <Form.Group controlId="formFullName" className=' mb-3'>
                                        <Form.Label>Nombre Completo</Form.Label>
                                        <Form.Control type="text" value={authData.name} disabled />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className='col-12 mb-3'>
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPhone" className='col-12 mb-3'>
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword" className='mb-3'>
                                        <Form.Label>Cambiar contraseña</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                placeholder="Nueva contraseña..."
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                                <i className={showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'}></i>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group controlId="formAddress" className='mb-3'>
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBirthDate" className='mb-5'>
                                        <Form.Label>Fecha de Nacimiento</Form.Label>
                                        <Form.Control type="text" value={authData.birthdate} disabled />
                                    </Form.Group>
                                    <div className='d-flex col-12 justify-content-end'>
                                        <Button type="submit" variant="warning">Guardar</Button>
                                    </div>
                                </Form>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Configuracion;
