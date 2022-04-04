import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api'
import wow from '../image/Icon.png'

function Subs() {
    let navigate = useNavigate();

    const [form, setForm] = useState({
        phoneNumber: "",
        transferProof: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const config = {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }
            const formData = new FormData();
            formData.append("phoneNumber", form.phoneNumber);
            formData.append("transferProof", form.transferProof[0], form.transferProof[0].name);

            // Insert data user to database here ...
            const response = await API.post('/transaction', formData, config)
            console.log(response);
            navigate('/home');

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container style={{ marginLeft: '139px', marginTop: '150px' }}>
                <div className="m-5 text-center" style={{ width: '415px' }}>
                    <h4>Premium</h4>
                    <p>Pay now and access all the latest books from <img style={{ width: '45px' }} src={wow} alt="" /></p>
                    <p><img style={{ width: '45px' }} src={wow} alt="" /> : 087851444884 </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Input your account number"
                                name="phoneNumber"
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                type="file"
                                placeholder="Attache proof of transfrer"
                                name="transferProof"
                                onChange={handleChange} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="md" style={{ backgroundColor: '#D60000' }} onClick={handleSubmit}>
                                Send
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>

            {/* <div modalAlret>
                <Modal show={showSubs} onHide={closeSubs} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <h5 className='text-center' style={{ color: 'green' }}>Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</h5>
                    </Modal.Body>
                </Modal>
            </div> */}



        </>
    )
}

export default Subs;