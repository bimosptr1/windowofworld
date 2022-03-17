import '../style/Menu.css';
import iconMin from '../image/iconMin.png';
import { Container, Form, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddBook() {
    return (
        <div className='mt-3'>
            <Link to="/Home">
                <img src={iconMin} alt="" />
            </Link>
            <Container style={{ width: '995px', marginBottom: '50px' }}>
                <h5>Add Book</h5>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="date" placeholder="Publication Date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Pages" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Author" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="ISBN" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={5} placeholder="About This Book" />
                    </Form.Group>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Group className="mb-3">
                            <Form.Control type='file' />
                        </Form.Group>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                        <Button className="ms-auto" style={{ backgroundColor: '#D60000' }}>Add My List</Button>
                    </Stack>
                </Form>
            </Container>

        </div>
    );
}

export default AddBook;