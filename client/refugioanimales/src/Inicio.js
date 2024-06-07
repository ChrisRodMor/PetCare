import Navbarcliente from './Navbarcliente';
import "bootstrap/js/dist/carousel";
import { Container } from 'react-bootstrap';
import img1 from './img/carousel1.jpg';
import img2 from './img/carousel2.jpg';
import img3 from './img/carousel3.jpg';
import imgdoggy from './img/GettyImages-1209050323.png';


function Inicio(){
    return(
        <div>
            
            <Navbarcliente/>

            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="img1"></img>
                    </div>
                    <div class="carousel-item">
                    <img src={img2} class="d-block w-100" alt="img2"></img>
                    </div>
                    <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="img3"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>¡Adopta, no compres!</h5>
                        <h5>En nuestro refugio, cada patita tiene una historia esperando un final feliz. Ven y conoce a tu nuevo mejor amigo.</h5>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            

            <div className='d-flex justify-content-center'>
                <Container className='p-5 m-5'>
                    <figure className='p-5 m-4'>
                        <blockquote class="blockquote mb-5">
                            <p>¡Bienvenidos a Refugio de Amor Animal!</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            En nuestro santuario, cada latido cuenta una historia de amor y esperanza. Somos un hogar para aquellos que han sido abandonados, maltratados o simplemente necesitan un poco más de cariño en sus vidas.
                            Aquí, cada patita es recibida con los brazos abiertos y cada ronroneo es una melodía de gratitud. Nuestro compromiso es ofrecer un refugio seguro y cálido para aquellos que no tienen voz, y encontrarles un hogar lleno de amor y compasión.
                            Ven y sé parte de nuestra familia, donde las colas siempre están moviéndose con alegría y los corazones latiendo al unísono por una causa noble. Juntos, podemos marcar la diferencia en la vida de aquellos que más lo necesitan. ¡Únete a nosotros en nuestra misión de amor animal!
                        </figcaption>
                    </figure>

                    

                </Container>
                <Container className='p-5 m-5'>
                    <img src={imgdoggy} class="d-block w-100" alt="imgdog"></img>
                </Container>

            </div>
            

        </div>
    );
}

export default Inicio;