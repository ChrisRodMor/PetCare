import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // La URL base de tu API
  withCredentials: true, // Para enviar las cookies de autenticación
  withXSRFToken: true,
  xsrfCookieName: 'csrftoken', // Nombre de la cookie CSRF
  xsrfHeaderName: 'X-CSRFToken', // Nombre del encabezado CSRF
});

export default axiosInstance;