import IconDropdownAction from "../../image/IconDropdownAction.svg";
import { NavDropdown } from "react-bootstrap";
import { API } from "../../config/api";

const DropdownAction = ({ id }) => {

    const handleApprove = async () => {
        try {
            await API.patch(`/transaction/approve/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDecline = async () => {
        try {
            await API.patch(`transaction/decline/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <NavDropdown
                title={
                    <div>
                        <img src={IconDropdownAction} alt="dropdownAction"></img>
                    </div>
                }
            >
                <li>
                    <NavDropdown.Item>
                        <div
                            style={{
                                display: "flex",
                                color: "green",
                            }}
                            onClick={handleApprove}
                        >
                            <p>Approve</p>
                        </div>
                    </NavDropdown.Item>
                </li>
                <li>
                    <NavDropdown.Item>
                        <div
                            style={{
                                display: "flex",
                                color: "red",
                            }}
                            onClick={handleDecline}
                        >
                            <p>Decline</p>
                        </div>
                    </NavDropdown.Item>
                </li>
            </NavDropdown>
        </div>
    );
};

export default DropdownAction;
