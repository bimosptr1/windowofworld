import iconMin from '../image/iconMin.png';
import Read from '../image/Read.png';
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../config/api"

function ReadBook() {
    const [listbook, setListbook] = useState([]);

    const params = useParams();
    const { id } = params;

    const handleListbook = async () => {
        try {
            const response = await API.get(`/book/${id}`);
            setListbook(response.data.data.book);
            // console.log("response", response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleListbook();
    }, []);

    return (
        <div className='m-5'>
            <Link to="/Home">
                <img src={iconMin} alt="" />
            </Link>
            <Container style={{ width: '100%', marginBottom: '50px' }}>
                <img style={{ width: '100%' }} src={`http://localhost:5000/uploads/${listbook?.bookFile}`} alt="" />
            </Container>
        </div>
    );
}

export default ReadBook;