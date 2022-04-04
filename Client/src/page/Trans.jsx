import React, { useState, useEffect } from "react";
import iconMin from '../image/iconMin.png';
import { Table } from "react-bootstrap";
import { API } from '../config/api';
import DropdownAction from "../components/action/DropdownAction";
import DropdownAdmin from "../components/action/DropdownAdmin";

function Trans() {
    const [trans, setTrans] = useState([]);
    const loadTrans = async () => {
        try {
            const response = await API.get(`/transaction`);
            setTrans(response.data.data.allTrans);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadTrans();
    }, []);

    return (
        <div className='m-5'>
            <img src={iconMin} alt="" />
            <DropdownAdmin />

            <div>
                <div className="table-container">
                    <h3>Incoming Transaction </h3>
                    <div>
                        <Table striped bordered hover variant="grey">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Users</th>
                                    <th>Bukti Transfer</th>
                                    <th>Remaining Active</th>
                                    <th>User Status</th>
                                    <th>Payment Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {trans.map((data) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.user.fullName}</td>
                                            <td>{data.transferProof}</td>
                                            <td>{data.remainingActive}</td>
                                            <td>{data.userStatus}</td>
                                            <td>{data.paymentStatus}</td>
                                            <td>
                                                <DropdownAction id={data?.id}></DropdownAction>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trans;