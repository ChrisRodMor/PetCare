import { AuthContext } from './AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navbarcliente from './Navbarcliente';
import Navbaremployee from './Navbaremployee';
import PetList from './PetList';
import axios from 'axios';

function Adoptar() {
    const { authData } = useContext(AuthContext);
    const [animals, setAnimals] = useState([]);
    const [searchResult, setSearchResult] = useState(null);

    if (!authData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {authData.type === 'employee' ? <Navbaremployee /> : <Navbarcliente />}
            <Container>
                <div className='mt-5 d-flex mb-4'>
                    <div className='me-auto'>
                        <h1 className="h1">Refugio</h1>
                    </div>
                    
                </div>
                <div className='d-flex flex-wrap'>
                    <PetList animals={searchResult || animals} />
                </div>
            </Container>
        </div>
    );
}

export default Adoptar;
