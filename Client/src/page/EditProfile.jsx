import iconMin from '../image/iconMin.png';
import { Container, Form, Button, Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { API } from '../config/api'
import { useParams } from 'react-router-dom';

function EditProfile() {
    let navigate = useNavigate();
    let { id } = useParams();

    const [form, setForm] = useState({
        gender: "",
        phone: "",
        address: "",
    })

    const handleUser = async () => {
        try {
            const getUser = await API.get(`/user`);
            setForm(getUser.data.data.user);
        } catch (error) {
            console.log(error);
        }
    };

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
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const formData = {
                gender: form.gender,
                phone: form.phone,
                address: form.address
            }
            // formData.append("bookFile", form.bookFile[0], form.bookFile[0].name);

            // Insert data user to database here ...
            const userId = parseInt(id, 10)
            const response = await API.patch("/editprofile/" + userId, formData, config)
            console.log(response);
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleUser();
    }, []);

    return (
        <div className='m-5'>
            <Link to="/Home">
                <img src={iconMin} alt="" />
            </Link>
            <Container style={{ width: '995px', marginBottom: '50px' }}>
                <h5>Edit Profile</h5>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Gender"
                            name="gender"
                            onChange={handleChange}
                            value={form.gender}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            onChange={handleChange}
                            value={form.phone}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            name="address"
                            onChange={handleChange}
                            value={form.address}
                        />
                    </Form.Group>
                    {/* <Stack direction="horizontal" gap={3}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type='file'
                                name="bookFile"
                                onChange={handleChange} />
                        </Form.Group>
                    </Stack> */}
                    {/* {preview && (
                        <div>
                            <img src={preview} style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover", }} alt="preview" />
                        </div>
                    )} */}
                    <Stack direction="horizontal" gap={2}>
                        <Button className="ms-auto" style={{ backgroundColor: '#D60000' }} onClick={handleSubmit}>Edit</Button>
                    </Stack>
                </Form>
            </Container>
        </div>
    );
}

export default EditProfile;