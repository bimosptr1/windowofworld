import React from "react";
import book1 from '../image/book1.png'
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import contentData from '../fakeData/contentData'

const ListBookComp = () => {
    return (
        <Row>
            {contentData.map((data, id) => (
                <Col key={id}>
                    <img className='mb-2' src={data.image} alt="" />
                    <Link to="/Detailbook/1">
                        <h5 className='mb-2'>{data.title}</h5>
                    </Link>
                    <p className='mb-2'>{data.write}</p>
                </Col>
            ))}
        </Row>
    )
}

export default ListBookComp;

