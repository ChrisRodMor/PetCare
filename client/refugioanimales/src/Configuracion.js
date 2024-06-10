import Navbarcliente from './Navbarcliente';
import { Container } from 'react-bootstrap';

function Configuracion(){
    return(
        <div>
            <Navbarcliente/>
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