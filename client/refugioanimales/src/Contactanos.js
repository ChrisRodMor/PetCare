import Navbarcliente from './Navbarcliente';
import { Container } from 'react-bootstrap';
import gmail from './img/gmail.webp';
import instagram from './img/instagram.webp';
import tiktok from './img/tiktok.webp';
import whatsapp from './img/whatsapp.png';
import facebook from './img/facebook.png';
import horarios from './img/stopwatch.svg';
import telefono from './img/telephone-fill.svg';
import location from './img/geo-alt-fill.svg';


function Contactanos(){
    return(
        <div>
            <Navbarcliente/>
            <Container>
                <div className='mt-5 d-flex mb-5'>
                    <div className='me-auto'>
                        <h1 className="h1">Contactanos</h1>
                    </div>
                </div>

                <Container className="bg-white p-5 rounded shadow mb-5">

                    <Container className= "d-flex flex-column text-align-center justify-content-center align-items-center">

                        <p className='fw-light'>¡Conéctate con nosotros en las redes sociales para mantenerte al día con nuestras últimas noticias, eventos y adopciones especiales!</p>
                        <hr className='my-3' style={{ borderTop: '2px solid #D2D5D8', width: '100%'}}></hr>
                        
                    </Container>

                    <Container className='d-flex row'>
                        <div className='mx-auto'>
                            <div>
                                <h5>Correo electrónico</h5>
                                <div className='d-flex'>
                                    <img src={gmail} alt='yimei' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>perritosrefugio2003@petcare.com</p>
                                </div>
                            </div>
                            <div>
                                <h5>Facebook</h5>
                                <div className='d-flex'>
                                    <img src={facebook} alt='feis' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>PetcareMascotas</p>
                                </div>
                            </div>
                            <div>
                                <h5>Instagram</h5>
                                <div className='d-flex'>
                                    <img src={instagram} alt='insta' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>Petcare22</p>
                                </div>
                            </div>
                            <div>
                                <h5>TikTok</h5>
                                <div className='d-flex'>
                                    <img src={tiktok} alt='tiktok' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>Pet_Care35</p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <div>
                                <h5>Horarios</h5>
                                <div className='d-flex'>
                                    <img src={horarios} alt='timer' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>Estamos abiertos de Lunes a viernes de 8 am hasta 8pm. ¡Esperamos verte pronto!</p>
                                </div>
                            </div>
                            <div>
                                <h5>Teléfono</h5>
                                <div className='d-flex'>
                                    <img src={telefono} alt='timer' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>612 124 8754</p>
                                </div>
                            </div>
                            <div>
                                <h5>Whatsapp</h5>
                                <div className='d-flex'>
                                    <img src={whatsapp} alt='whats' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>+52 612 117 1213</p>
                                </div>
                            </div>
                            <div>
                                <h5>Dirección</h5>
                                <div className='d-flex'>
                                    <img src={location} alt='timer' style={{width: '20px', height: '20px'}}></img>
                                    <p className='fw-light'>Av.Universidad, Solidaridad Mezquititio I, II. </p>
                                </div>
                            </div>
                        </div>
                    </Container>

                    

                </Container>
            </Container>
        </div>
    );
}

export default Contactanos;