import MenuOFF from '../components/MenuOFF'
import Subs from '../components/Subs'
import { Container, Row, Col } from 'react-bootstrap';

function Subscribe() {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={6} md={3}>
                    <MenuOFF />
                </Col>
                <Col xs={12} md={9}>
                    <Subs />
                </Col>
            </Row>
        </Container>


    );
}

export default Subscribe;