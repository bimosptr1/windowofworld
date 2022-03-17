import '../style/Menu.css';
import iconMin from '../image/iconMin.png';
import Read from '../image/Read.png';
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ReadBook() {
    return (
        <div className='mt-3'>
            <Link to="/Home">
                <img src={iconMin} alt="" />
            </Link>
            <Container style={{ width: '100%', marginBottom: '50px' }}>
                <img style={{ width: '100%' }} src={Read} alt="" />
            </Container>
        </div>
    );
}

export default ReadBook;