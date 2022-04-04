import Auth from '../components/Auth'
import { Container } from 'react-bootstrap';
import backgroundImg from '../image/Vector.png'

function Landing() {
    return (
        <Container fluid style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <Auth />
        </Container>
    );
}

export default Landing;