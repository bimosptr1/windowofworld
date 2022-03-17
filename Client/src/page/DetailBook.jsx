import Menu from '../components/Menu'
import Detail from '../components/Detail'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={6} md={3}>
                    <Menu />
                </Col>
                <Col xs={12} md={9}>
                    <Detail id="1" title="Serangkai" write="Valerie Patkar" />
                </Col>
            </Row>
        </Container>


    );
}

export default Home;