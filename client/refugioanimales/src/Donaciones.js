import Navbarcliente from './Navbarcliente';
import { Container } from 'react-bootstrap';
import imgmascotas from './img/grupomascotas.jpg'
import './contenedor.css';

function Donaciones(){
    return(
        <div>
            <Navbarcliente/>
            <Container>
                <div className='mt-5 d-flex mb-5'>
                    <div className='me-auto'>
                        <h1 className="h1">Gracias!</h1>
                    </div>
                </div>
                <Container className="bg-white p-4 rounded shadow d-flex flex-column position-absolute">
                    <Container className= "d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <p className='fw-light'>¡Gracias por considerar adoptar, donar o voluntariar con nosotros! Tu apoyo es fundamental para nuestra misión de ayudar a los animales necesitados.</p>
                            <hr className='my-3' style={{ borderTop: '2px solid #D2D5D8', width: '100%'}}></hr>
                        </div>
                        <Container className='d-flex'>
                            <div className ='mx-auto'>
                                <img src={imgmascotas}></img>
                            </div>
                            <div className ='mx-auto'>
                                <h5>Transferencia interbancaria</h5>
                                <div>

                                </div>
                                <div>
                                    <button href = "" type="submit" className="btn btn-warning btn-sm btn-block">Apoyar!</button>
                                </div>
                            </div>
                        </Container>
                    
                    </Container>
                </Container>
            </Container>


        </div>
    );
}

export default Donaciones;