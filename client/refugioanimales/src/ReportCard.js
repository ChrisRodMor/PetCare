import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ReportCard = () => {
  const [report, setReport] = useState({ type: '', date: '', id: '' });

  useEffect(() => {
    // Reemplaza la URL con la de tu API
    axios.get('https://api.tuservidor.com/reportes')
      .then(response => {
        setReport(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='card border-success' style={{ maxWidth: '18rem' }}>
      <div className='card-header bg-transparent border-success'>{report.type}</div>
      <div className='card-body text-success'>
        <h5 className='card-title'>{report.date}</h5>
        <p className='card-text'>ID: {report.id}</p>
      </div>
    </div>
  );
};

export default ReportCard;
