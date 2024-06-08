import { Container, Form } from 'react-bootstrap';
import Navbarcliente from './Navbarcliente';

function Adoptar(){
    return(
        <div>
            <Navbarcliente/>
            <Container>
                <div className='mt-5 d-flex'>

                    <div className='me-auto'>
                        <h1 class="h1">Refugio</h1>
                    </div>
                    
                    

                    <div className = "d-flex">
                        <Form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </Form>
                    </div>

                </div>

                <hr className='my-3' style={{ borderTop: '2px solid #D2D5D8'}}></hr>
                
                <div>

                    <h1>segundoDIV</h1>
                </div>
            </Container>
        </div>
    );
}

export default Adoptar;