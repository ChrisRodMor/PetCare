import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Navbarcliente from './Navbarcliente';
import Navbaremployee from './Navbaremployee';
import { Container } from 'react-bootstrap';

function Configuracion(){
    const { authData } = useContext(AuthContext);
    if (!authData) {
        return <div>Loading...</div>;
    }
    return(
        <div>
            {authData.type === 'employee' ? <Navbaremployee /> : <Navbarcliente />}
            <Container>
                <div className='mt-5 d-flex'>
                    <div className='me-auto'>
                        <h1 className="h1">Mi Perfil</h1>
                    </div>
                </div>
                <hr className='my-3' style={{ borderTop: '2px solid #D2D5D8'}}></hr>
            </Container>
        </div>
    );
}

export default Configuracion;