import React from "react";
import book1 from '../image/book1.png'
import { Row, Col, Button, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";

const DetailBookComp = (props) => {
    return (
        <div className="mt-5">
            <Row className="mb-5">
                <Col xs={4}>
                    <img className='mb-2' src={book1} alt="" style={{ width: '300px' }} />
                </Col>
                <Col>
                    <h2 className='mb-2'>{props.title}</h2>
                    <p className='mb-2'>{props.write}</p>
                    <h4 className='mb-2'>Publication date</h4>
                    <p className='mb-2'>April 2020</p>
                    <h4 className='mb-2'>Pages</h4>
                    <p className='mb-2'>436</p>
                    <h4 className='mb-2'>ISBN</h4>
                    <p className='mb-2'>9781789807554</p>
                </Col>
            </Row>
            <Row className="mb-5">
                <h3 className="mb-4">About This Book</h3>
                <p>In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.</p>
                <p>Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.</p>
                <p>Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.</p>
            </Row>
            <Row className="mb-5">
                <Stack direction="horizontal" gap={2}>
                    <Button className="ms-auto" style={{ backgroundColor: '#D60000' }}>Add My List</Button>
                    <Link to="/ReadBook">
                        <Button style={{ backgroundColor: 'rgba(205, 205, 205, 0.7)', color: 'black' }}>Read Book</Button>
                    </Link>
                </Stack>
            </Row>
        </div>
    )
}

DetailBookComp.defaultProps = {
    title: 'Title Book',
    write: 'writer'
}

export default DetailBookComp;