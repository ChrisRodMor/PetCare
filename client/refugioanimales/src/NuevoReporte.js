import React, { useState } from 'react';
import Navbarcliente from './Navbarcliente';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NuevoReporte() {
  const [reportType, setReportType] = useState('Reporte de maltrato');

  const renderAdditionalFields = () => {
    switch (reportType) {
      case 'Reporte de mascota perdida':
        return (
          <>
            <div className="row mb-3">
              <div className="col-md-12 mb-3">
                <label htmlFor="petName" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="petName" placeholder="Nombre de la mascota" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="petBirthDate" className="form-label">Fecha de nacimiento</label>
                <input type="date" className="form-control" id="petBirthDate" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="petSpecies" className="form-label">Especie</label>
                <input type="text" className="form-control" id="petSpecies" placeholder="Especie" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="petBreed" className="form-label">Raza</label>
                <input type="text" className="form-control" id="petBreed" placeholder="Raza" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="petColor" className="form-label">Color</label>
                <input type="text" className="form-control" id="petColor" placeholder="Color" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="petSize" className="form-label">Tamaño</label>
                <select className="form-select" id="petSize">
                  <option>Pequeño</option>
                  <option>Mediano</option>
                  <option>Grande</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="petSex" className="form-label">Sexo</label>
                <select className="form-select" id="petSex">
                  <option>Macho</option>
                  <option>Hembra</option>
                </select>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbarcliente />
      <Container className='mb-5'>
        <div className='mt-5 d-flex mb-5'>
          <div className='me-auto'>
            <h1 className="h1">Nuevo reporte</h1>
          </div>
        </div>
        <Container className="bg-white p-5 rounded shadow mb-5">
          <Container className="d-flex text-align-center align-items-center">
            <form className='col-12'>
              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="reportType" className="form-label">Tipo</label>
                  <select 
                    className="form-select" 
                    id="reportType" 
                    value={reportType} 
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <option>Reporte de maltrato</option>
                    <option>Reporte de mascota perdida</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="reportDate" className="form-label">Fecha de los hechos</label>
                  <input type="date" className="form-control" id="reportDate" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="reportTime" className="form-label">Hora de los hechos</label>
                  <input type="time" className="form-control" id="reportTime" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="reportImage" className="form-label">Foto del animal</label>
                  <input type="file" className="form-control" id="reportImage" />
                </div>
              </div>

              {renderAdditionalFields()}

              <div className="row mb-3">
                <div className="col-md-12 mb-3">
                  <label htmlFor="reportDescription" className="form-label">Descripción de los hechos</label>
                  <textarea className="form-control" id="reportDescription" rows="3" placeholder="Describe los hechos"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <Link to="/reportes">
                    <button type="button" className="btn btn-outline-warning btn-block" style={{ marginRight: '5%' }}>Regresar</button>
                  </Link>
                  <button type="submit" className="btn btn-warning">Guardar</button>
                </div>
              </div>
            </form>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default NuevoReporte;
