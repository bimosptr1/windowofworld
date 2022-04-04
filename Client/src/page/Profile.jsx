import MenuOFF from '../components/MenuOFF'
import ProfileComp from '../components/ProfileComp'
import { Container, Row, Col } from 'react-bootstrap';

function Profile() {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={6} md={3}>
                    <MenuOFF />
                </Col>
                <Col xs={12} md={9}>
                    <ProfileComp />
                </Col>
            </Row>
        </Container>


    );
}

export default Profile;