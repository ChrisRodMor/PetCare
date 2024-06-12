import { AuthContext } from './AuthContext';
import React, { useContext } from 'react';
import Navbarcliente from './Navbarcliente';
import Navbaremployee from './Navbaremployee';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Reportes(){
    const { authData } = useContext(AuthContext);
    if (!authData) {
        return <div>Loading...</div>;
    }
    return(
        <div>
            {authData.type === 'employee' ? <Navbaremployee /> : <Navbarcliente />}
            <Container>
                <div className='mt-5 d-flex'>
                    <div className='d-flex justify-content-center'>
                        <h1 className="h1">Mis reportes</h1>
                        
                    </div>

                    <div className="ms-4 d-flex align-items-center mx-auto flex-column flex-md-row">
                        <span className="badge mb-2 mb-md-0" style={{ backgroundColor: '#f1c40f', color: 'black' }}>Revisando</span>
                        <span className="badge mb-2 mb-md-0 ms-md-2" style={{ backgroundColor: '#1abc9c', color: 'white' }}>Avanzando</span>
                        <span className="badge ms-md-2" style={{ backgroundColor: '#27ae60', color: 'white' }}>Terminado</span>
                    </div>

                    <div className = 'd-flex justify-content-end align-items-center'>
                        <Link to ='/NuevoReporte'><Button href = "(0)javascript" type="submit" className="btn btn-warning btn-sm btn-block">Crear reporte</Button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Reportes;