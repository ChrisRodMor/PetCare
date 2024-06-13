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
                setMascota(response.data.data); // Establecer los datos de la mascota desde la API
            } catch (error) {
                console.error('Error fetching pet details:', error);
            }
        };

        fetchMascota();
    }, [id]);

    if (!mascota) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
    }

    // Validar si existe el nombre de la mascota
    if (!mascota.name) {
        return <div>No se encontró el nombre de la mascota.</div>;
    }

    return (
        <div>
            <h1>{mascota.name}</h1>
            <p>Edad: {mascota.age}</p>
            <p>Género: {mascota.gender}</p>
            <p>Tipo: {mascota.type_id}</p> {/* Aquí deberías mostrar el tipo de animal, tal vez necesites hacer una consulta adicional para obtener el nombre del tipo */}
            <p>Raza: {mascota.breed_id}</p> {/* Aquí deberías mostrar la raza, tal vez necesites hacer una consulta adicional para obtener el nombre de la raza */}
            <p>Descripción: {mascota.description}</p>
            <p>Color: {mascota.color}</p>
            <p>Peso: {mascota.weight} kg</p>
            <p>Tamaño: {mascota.size}</p>
            <p>Salud: {mascota.health}</p>
            <p>Esterilizado: {mascota.sterilized}</p>
            <img src={`http://127.0.0.1:8000/${mascota.file_path}`} alt={mascota.name} style={{ maxWidth: '100%', height: 'auto' }} />

        </div>
    );
}

export default VerMascota;
