import { Form, Button } from 'react-bootstrap';
import '../style/Global.css';

function Signup() {
    return (
        <>
            <h3 className='Heading'>Sign Up</h3>
            <Form>
                <Form.Group className="inputForm" controlId="formBasicEmail">
                    <Form.Control className='inputControl' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="inputForm" controlId="formBasicPassword">
                    <Form.Control className='inputControl' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="inputForm" controlId="formBasicEmail">
                    <Form.Control className='inputControl' type="text" placeholder="Fullname" />
                </Form.Group>

                <div className="d-grid gap-2 mb-3">
                    <Button style={{ background: "#D60000", height: '50px' }} type="submit">Sign Up</Button>
                </div>

                <Form.Group className="mb-3 mb-3 text-center">
                    <Form.Text style={{ color: 'black', fontSize: '18px' }}>Already have an account ? Klik
                        <a href="https://google.com" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bolder' }}> Here</a>
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    );
}

export default Signup;