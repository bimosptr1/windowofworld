import { Form, Button, Alert } from 'react-bootstrap';
import { useContext, useState } from "react";
import { API, setAuthToken } from '../../config/api'
import { UserContext } from '../../context/userContext'


function Login({ toggle }) {
    const [message, setMessage] = useState(null);

    // Store data with useState here ...
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [, dispatch] = useContext(UserContext);

    const { email, password } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // Create Configuration Content-type here ...
            // Content-type: application/json
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            // Convert form data to string here ...
            const body = JSON.stringify(form)

            // Insert data user for login process here ...
            const response = await API.post('/login', body, config)
            // console.log(response)

            setAuthToken(response.data.data.token);
            console.log(response.data.data);
            dispatch({
                type: "login",
                payload: response.data.data,
            });

            // Checking process
            if (response?.status === 200) {
                // Status check
                // if (response.data.data.role === "admin") {
                //     navigate('/transaction')
                // } else {
                //     navigate('home')
                // }

                const alert = (
                    <Alert variant="success" className="py-1">
                        Login success
                    </Alert>
                );
                setMessage(alert);
            }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Login failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };

    return (
        <>
            <h3 className='Heading'>Sign In</h3>
            {message && message}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="inputForm" controlId="formBasicEmail">
                    <Form.Control
                        className='inputControl'
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleChange}
                        type="email" />
                </Form.Group>
                <Form.Group className="inputForm" controlId="formBasicPassword">
                    <Form.Control
                        className='inputControl'
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                        type="password" />
                </Form.Group>
                <div className="d-grid gap-2 mb-3">
                    <Button style={{ background: "#D60000", height: '50px' }} onClick={handleSubmit}  >Sign In</Button>
                </div>
                <Form.Group className="mb-3 text-center">
                    <Form.Text style={{ color: 'black', fontSize: '18px' }}>Don't have an account ? Klik {" "}
                        <label onClick={toggle} style={{ color: 'black', fontWeight: 'bolder' }}> Here</label>
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    );
}

export default Login;