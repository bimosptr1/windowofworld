import logo from '../image/Icon.png';
import '../style/Global.css';
import Login from './Login'
import Signup from './Signup'
import { Container, Modal, Row } from 'react-bootstrap';
import React, { useState } from 'react';


function Stiker() {

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showSignup, setShowsSignup] = useState(false);
    const handleCloseSignup = () => setShowsSignup(false);
    const handleShowSignup = () => setShowsSignup(true);

    return (
        <>
            <Container style={{ width: '549px', marginLeft: '102px' }}>
                <Row>
                    <img className='img' src={logo} alt="logo" />
                    <p className='txt'>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
                    <button className="signup" onClick={handleShowSignup}>Sign Up</button>
                    <button className="login" onClick={handleShowLogin} >Login</button>
                </Row>
            </Container>

            <div modalLogin>
                <Modal show={showLogin} onHide={handleCloseLogin} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <Login />
                    </Modal.Body>
                </Modal>
            </div>

            <div modalSignup>
                <Modal show={showSignup} onHide={handleCloseSignup} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <Signup />
                    </Modal.Body>
                </Modal>
            </div>

        </>
    );
}

export default Stiker;