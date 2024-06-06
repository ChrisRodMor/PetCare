import {Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbarcliente.css';
import banner from './img/bannerPetCare.png';

function Navbarcliente(){
    return(
      <nav className ="navbar navbar-expand-lg fixed-top">

        <a class="navbar-brand" href="#">
          <img src={banner} alt="banner" width="130" height="50" class="d-inline-block align-text-top"></img>
        </a>

        <ul class="nav nav-underline justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page">Adoptar</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reportes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contactanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Donaciones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mi perfil</a>
          </li>
        </ul>
      </nav>


    );
}

export default Navbarcliente;