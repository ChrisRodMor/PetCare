import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbarcliente.css';
import banner from './img/bannerPetCare.png';
import "bootstrap/dist/js/bootstrap.bundle";

function Navbaremployee() {
  const navigate = useNavigate();

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
    script1.integrity = 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo';
    script1.crossOrigin = 'anonymous';

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js';
    script2.integrity = 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1';
    script2.crossOrigin = 'anonymous';

    const script3 = document.createElement('script');
    script3.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js';
    script3.integrity = 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM';
    script3.crossOrigin = 'anonymous';

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('refreshed');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-primary shadow-sm">
      <div className="container">

        <a href="javascript:void(0)" className="navbar-brand">
          <Link to={'/Inicio'}>
            <img src={banner} href="#" alt="banner" width="350" height="100" className="d-inline-block align-text-top" />
          </Link>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-underline ms-5 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link me-5" aria-current="page" to="/adoptar">Animales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5" aria-current="page" to="/reportes">Reportes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5" aria-current="page" to="/contactanos">Clientes</Link>
            </li>
            <li className="nav-item dropdown me-5">
              <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi Perfil
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/configuracion">Configuración</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="javascript:void(0)" onClick={handleLogout}>Cerrar sesión</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbaremployee;
