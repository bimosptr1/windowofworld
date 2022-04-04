import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { API } from '../../config/api'
import { Alert } from "react-bootstrap";

function Signup({ toggle }) {

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const { fullName, email, password } = form;

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

            // Insert data user to database here ...
            const response = await API.post('/register', body, config)

            // Notification
            if (response.data.status === "success") {
                const alert = (
                    <Alert variant="success" className="py-1">
                        Success
                    </Alert>
                );
                setMessage(alert);
            } else {
                const alert = (
                    <Alert variant="danger" className="py-1">
                        Failed
                    </Alert>
                );
                setMessage(alert);
            }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };

    return (
        <>
            <h3 className='Heading'>Sign Up</h3>
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

                <Form.Group className="inputForm" controlId="formBasicText">
                    <Form.Control
                        className='inputControl'
                        name="fullName"
                        value={fullName}
                        placeholder="Full Name"
                        onChange={handleChange}
                        type="text" />
                </Form.Group>

                <div className="d-grid gap-2 mb-3">
                    <Button style={{ background: "#D60000", height: '50px' }}
                        type="submit">Sign Up</Button>
                </div>

                <Form.Group className="mb-3 mb-3 text-center">
                    <Form.Text style={{ color: 'black', fontSize: '18px' }}>Already have an account ? Klik {" "}
                        <label onClick={toggle} style={{ color: 'black', fontWeight: 'bolder' }}> Here</label>
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    );
}

export default Signup;