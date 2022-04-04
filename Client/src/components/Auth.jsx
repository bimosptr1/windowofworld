import logo from '../image/Icon.png';
import Login from './modal/Login'
import Register from './modal/Signup'
import FormModal from './modal/Modal'
import { Container, Row } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate();

    const [state, dispatch] = useContext(UserContext);
    const [showRegister, setShowRegister] = useState(false);

    const handleShowRegister = () => {
        setShowRegister(true);
    };
    const handleCloseRegister = () => {
        setShowRegister(false);
    };

    const handleShowLogin = () => {
        dispatch({ type: "showLoginPopup" });
    };
    const handleCloseLogin = () => {
        dispatch({ type: "hideLoginPopup" });
    };

    const toggleToRegister = () => {
        setShowRegister(true);
        dispatch({ type: "hideLoginPopup" });
    };

    const toggleToLogin = () => {
        dispatch({ type: "showLoginPopup" });
        setShowRegister(false);
    };

    const checkAuth = () => {
        if (state.login === true) {
            navigate("/home");
        }
    };
    checkAuth();

    return (
        <>
            <FormModal show={state.showLoginPopup} handleClose={handleCloseLogin}>
                <Login toggle={toggleToRegister} handleClose={handleCloseLogin} />
            </FormModal>
            <FormModal show={showRegister} handleClose={handleCloseRegister}>
                <Register toggle={toggleToLogin} handleClose={handleCloseLogin} />
            </FormModal>

            <Container style={{ width: '549px', marginLeft: '50px' }}>
                <Row>
                    <img className='img' src={logo} alt="logo" />
                    <p className='txt'>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
                    <button className="signup" onClick={handleShowRegister}>Sign Up</button>
                    <button className="login" onClick={handleShowLogin} >Login</button>
                </Row>
            </Container>
        </>
    );
}

export default Auth;