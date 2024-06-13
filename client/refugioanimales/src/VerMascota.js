import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VerMascota() {
    const { id } = useParams();
    const [mascota, setMascota] = useState(null);

    useEffect(() => {
        const fetchMascota = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/animals/${id}`);
                setMascota(response.data); // Establecer los datos de la mascota desde la API
            } catch (error) {
                console.error('Error fetching pet details:', error);
            }
        };

        fetchMascota();
    }, [id]);

    if (!mascota) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
    }

    // Verificar que mascota.name existe antes de acceder a él
    if (!mascota.name) {
        return <div>No se encontró el nombre de la mascota.</div>;
    }

    return (
        <div>
            <h1>{mascota.name}</h1>
            <p>Otros detalles de la mascota...</p>
        </div>
    );
}

export default VerMascota;
