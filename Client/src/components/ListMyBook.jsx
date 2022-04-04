import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { API } from '../config/api'

const ListMyBook = () => {
    const [book, setBook] = useState([]);
    const loadBook = async () => {
        try {
            const response = await API.get("/mylistbookid");
            setBook(response.data.data.allBook);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadBook();
    }, []);


    return (
        <Row>
            {book.map((data) => (
                <Col className='mb-5' key={data.id}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: `/book/${data.books.id}` }}>
                        <div className="card-image-container">
                            <img className='mb-2' style={{ maxWidth: "100%", height: "270px", borderRadius: "5px" }} src={`http://localhost:5000/uploads/${data?.books.bookFile}`} alt="" />
                        </div>
                        <h5 className='mb-2'>{data.books.title}</h5>
                        <p className='mb-2'>{data.books.about}</p>
                    </Link>
                </Col>
            ))
            }
        </Row >
    )
}

export default ListMyBook;