import MenuOFF from '../components/MenuOFF'
import Detail from '../components/Detail'
import { Container, Row, Col } from 'react-bootstrap';

function bookID() {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={6} md={3}>
                    <MenuOFF />
                </Col>
                <Col xs={12} md={9}>
                    <Detail />
                </Col>
            </Row>
        </Container>


    );
}

export default bookID;