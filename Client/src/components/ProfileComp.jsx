
import '../style/Global.css';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
import iconProfil from '../image/iconProfil.png';
import mail from '../image/mail.png';
import gender from '../image/gender.png';
import phone from '../image/phone.png';
import address from '../image/address.png';

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { API } from '../config/api';
import ListMyBook from '../components/ListMyBook'

function ProfileComp() {
    let navigate = useNavigate()
    const [user, seUser] = useState([]);

    const handleUser = async () => {
        try {
            const response = await API.get(`/user`);
            seUser(response.data.data.user);
            console.log("response", response);
        } catch (error) {
            console.log(error);
        }
    };

    const editClick = () => {
        navigate(`/editprofile/${user.id}`)
    }

    // console.log("data dari response", user);
    useEffect(() => {
        handleUser();
    }, []);

    return (
        <Container fluid>
            <div className='m-3'>
                <h3>Profile</h3>
                <Card className='mb-5' style={{ width: '100%', backgroundColor: '#FFD9D9' }}>
                    <Card.Body>
                        <Row>
                            <Col className='ProfComp'>
                                <Row>
                                    <Col xs={1}><img style={{ width: '100%' }} src={mail} alt="" /></Col>
                                    <Col>
                                        <p>{user.email}</p>
                                        <p className="listProf">Email</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1}><img style={{ width: '100%' }} src={gender} alt="" /></Col>
                                    <Col>
                                        <p>{user.gender}</p>
                                        <p className="listProf">Gender</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1}><img style={{ width: '100%' }} src={phone} alt="" /></Col>
                                    <Col>
                                        <p>{user.phone}</p>
                                        <p className="listProf">Mobile Phone</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1}><img style={{ width: '100%' }} src={address} alt="" /></Col>
                                    <Col>
                                        <p>{user.address}</p>
                                        <p className="listProf">Address</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4}>
                                <img src={iconProfil} alt="" style={{ width: '226px', marginBottom: '10px' }} />
                                <br />
                                <Button className="ms-auto" style={{ backgroundColor: '#D60000', width: '226px' }} onClick={editClick}>Edit</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <h3 className='mb-5'>My List Book</h3>
                <Row>
                    <ListMyBook />
                </Row>
            </div>
        </Container>
    );
}

export default ProfileComp;