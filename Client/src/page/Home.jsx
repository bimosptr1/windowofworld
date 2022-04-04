// import Menu from '../components/Menu'
import MenuOFF from '../components/MenuOFF'
import Frame from '../components/imgFrame'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={6} md={3}>
                    <MenuOFF />
                </Col>
                <Col xs={12} md={9}>
                    <Frame />
                </Col>
            </Row>
        </Container>


    );
}

export default Home;