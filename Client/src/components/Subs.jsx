import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import wow from '../image/Icon.png'

function Subs() {
    const [showSubs, setSubs] = useState(false);
    const closeSubs = () => setSubs(false);
    const openSubs = () => setSubs(true);

    return (
        <>
            <Container style={{ marginLeft: '139px', marginTop: '150px' }}>
                <div className="m-5 text-center" style={{ width: '415px' }}>
                    <h4>Premium</h4>
                    <p>Pay now and access all the latest books from <img style={{ width: '45px' }} src={wow} alt="" /></p>
                    <p><img style={{ width: '45px' }} src={wow} alt="" /> : 087851444884 </p>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Input your account number" />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control type="file" placeholder="Attache proof of transfrer" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="md" style={{ backgroundColor: '#D60000' }} onClick={openSubs}>
                                Send
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>

            <div modalAlret>
                <Modal show={showSubs} onHide={closeSubs} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <h5 className='text-center' style={{ color: 'green' }}>Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</h5>
                    </Modal.Body>
                </Modal>
            </div>



        </>
    )
}

export default Subs;