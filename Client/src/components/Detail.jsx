import React, { useEffect, useState } from "react";
import { Row, Col, Button, Stack } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API } from "../config/api"

const DetailBookComp = () => {
    let navigate = useNavigate();
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

    const handleMylist = async () => {
        try {
            await API.post(`/mylistbook/${id}`);
            navigate('/profile')
        } catch (error) {
            console.log(error);
        }
    };

    const readBook = async () => {
        try {
            navigate(`/readbook/${id}`)
        } catch (error) {
            console.log(error);
        }
    };

    // console.log("data dari response", listbook);
    useEffect(() => {
        handleListbook();
    }, []);

    return (
        <div className="mt-5">
            <Row className="mb-5">
                <Col>
                    <img className='mb-2' src={`http://localhost:5000/uploads/${listbook?.bookFile}`} alt="" style={{ maxWidth: '400px' }} />
                </Col>
                <Col xs={6}>
                    <h2 className='mb-2'>{listbook?.title}</h2>
                    <p className='mb-2'>{listbook?.author}</p>
                    <h4 className='mb-2'>Publication date</h4>
                    <p className='mb-2'>{listbook?.publicationDate}</p>
                    <h4 className='mb-2'>Pages</h4>
                    <p className='mb-2'>{listbook?.pages}</p>
                    <h4 className='mb-2'>ISBN</h4>
                    <p className='mb-2'>{listbook?.isbn}</p>
                </Col>
            </Row>
            <Row className="mb-5">
                <h3 className="mb-4">About This Book</h3>
                <p>{listbook?.about}</p>
            </Row>
            <Row className="mb-5">
                <Stack direction="horizontal" gap={2}>
                    <Button className="ms-auto" style={{ backgroundColor: '#D60000' }} onClick={handleMylist}>Add My List</Button>
                    <Button style={{ backgroundColor: 'rgba(205, 205, 205, 0.7)', color: 'black' }} onClick={readBook}>Read Book</Button>
                </Stack>
            </Row>
        </div>
    )
}

export default DetailBookComp;