import Sticker from '../components/Sticker'
import { Container } from 'react-bootstrap';
import backgroundImg from '../image/Vector.png'

function Landing() {
    return (
        <Container fluid style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '900px'
        }}>
            <Sticker />
        </Container>
    );
}

export default Landing;