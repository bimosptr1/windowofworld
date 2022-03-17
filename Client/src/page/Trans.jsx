import '../style/Menu.css';
import iconMin from '../image/iconMin.png';
import examtrans from '../image/examptrans.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Trans() {
    return (
        <div className='mt-3'>
            <Link to="/Home">
                <img src={iconMin} alt="" />
            </Link>
            <Container style={{ width: '995px', marginBottom: '50px' }}>
                <h5 className='mt-4 mb-4'>Incoming Transaction</h5>
                <img style={{ width: '100%' }} src={examtrans} alt="" />

            </Container>

        </div>
    );
}

export default Trans;