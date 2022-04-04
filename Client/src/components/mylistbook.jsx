import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { API } from '../config/api'

const myList = () => {
    const [booksaya, setBooksaya] = useState([]);

    const loadmyBook = async () => {
        try {
            const responseBook = await API.get("/mylistbookid");
            setBooksaya(responseBook.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(222222, booksaya);
    useEffect(() => {
        loadmyBook();
    }, []);


    return (
        <></>
        // <Row>
        //     {book.map((data) => (
        //         <Col className='mb-5' key={data.mybooks.id}>
        //             <Link style={{ textDecoration: "none" }} to={{ pathname: `/book/${data.id}` }}>
        //                 <div className="card-image-container">
        //                     <img className='mb-2' style={{ maxWidth: "100%", height: "270px", borderRadius: "5px" }} src={`http://localhost:5000/uploads/${data?.bookFile}`} alt="" />
        //                 </div>
        //                 <h5 className='mb-2'>{data.mybooks.title}</h5>
        //                 <p className='mb-2'>{data.mybooks.about}</p>
        //             </Link>
        //         </Col>
        //     ))
        //     }
        // </Row >
    )
}

export default myList;