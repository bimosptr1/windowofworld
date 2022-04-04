import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import Default from "../../image/Default.svg";

function DropdownAdmin() {
    const navigate = useNavigate();
    const [, dispatch] = useContext(UserContext);
    const handleLogout = () => {
        dispatch({
            type: "logout",
        });
        navigate('/')
    };
    return (
        <div style={{ position: 'absolute', inset: '5% 90%' }}>
            <NavDropdown
                title={
                    <div>
                        <img className="img-profile-admin" src={Default} alt="navbarPict" />
                    </div>
                }
            >
                <li>
                    <NavDropdown.Item onClick={() => navigate("/AddBook")}>
                        <div
                            style={{
                                display: "flex",
                            }}
                        >
                            <p>Add Book</p>
                        </div>
                    </NavDropdown.Item>
                </li>
                <li>
                    <NavDropdown.Item onClick={() => navigate("/transaction")}>
                        <div
                            style={{
                                display: "flex",
                            }}
                        >
                            <p>List Transaction</p>
                        </div>
                    </NavDropdown.Item>
                </li>
                <li>
                    <NavDropdown.Item onClick={handleLogout}>
                        <div
                            style={{
                                display: "flex",
                            }}
                        >
                            <p>Logout</p>
                        </div>
                    </NavDropdown.Item>
                </li>
            </NavDropdown>
        </div>
    );
}

export default DropdownAdmin;