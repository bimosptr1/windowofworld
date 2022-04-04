import iconMin from '../image/iconMin.png';
import iconProfil from '../image/iconProfil.png';
import userx from '../image/user.png';
import bill from '../image/bill.png';
import logout from '../image/logout.png';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../context/userContext'
import { useState, useContext, useEffect } from "react";
import { API } from '../config/api'

function Menu() {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);

    const [usertrans, setUsertrans] = useState([]);
    const loadUser = async () => {
        try {
            const response = await API.get("/transactionid");
            setUsertrans(response.data.data.trans);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadUser();
    }, []);

    const handleLogout = () => {
        dispatch({
            type: "logout",
        });
        navigate('/')
    };

    return (
        <div className='menu'>
            <div className="containerMenu">
                <Link to="/Home">
                    <img src={iconMin} className='imgIconmin' alt="iconMin" />
                </Link>
                <br />
                <img src={iconProfil} className='imgProfile' alt='imgProfile' />
                <h5 className='user'>{state.user.fullName}</h5>
                <h5 className='status' style={{ color: '#D60000' }}>Not Subscribe</h5>
            </div>

            <div className="containerMenu2">
                <hr />
                <Link to="/Profile">
                    <h5 className='my-5'>
                        <img src={userx} alt="" /> Profile</h5>
                </Link>
                <Link to="/Subscribe">
                    <h5 className='my-5'>
                        <img src={bill} alt="" /> Subscribe</h5>
                </Link>
                <hr />
                <h5 className='my-5' onClick={handleLogout}>
                    <img src={logout} alt="" /> Logout</h5>

            </div>

        </div>
    );
}

export default Menu;