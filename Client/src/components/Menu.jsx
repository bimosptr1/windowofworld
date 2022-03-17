import '../style/Menu.css';
import iconMin from '../image/iconMin.png';
import iconProfil from '../image/iconProfil.png';
import userx from '../image/user.png';
import bill from '../image/bill.png';
import logout from '../image/logout.png';
import { Link } from "react-router-dom";

import { } from 'react-bootstrap';

function Menu() {
    return (
        <div className='menu'>
            <div className="containerMenu">
                <Link to="/Home">
                    <img src={iconMin} className='imgIconmin' alt="iconMin" />
                </Link>
                <br />
                <img src={iconProfil} className='imgProfile' alt='imgProfile' />
                <h5 className='user'>Bimo</h5>
                <h5 className='status' style={{ color: '#29BD11' }}>Subscribed</h5>
                <hr />
            </div>

            <div className="containerMenu2">
                <Link to="/Profile">
                    <h5 className='profilLogo'>
                        <img src={userx} alt="" /> Profile</h5>
                </Link>
                <Link to="/Subscribe">
                    <h5 className='Subscribe'>
                        <img src={bill} alt="" /> Subscribe</h5>
                </Link>
                <hr />
                <Link to="/">
                    <h5 className='Logout'>
                        <img src={logout} alt="" /> Logout</h5>
                </Link>
            </div>

        </div>
    );
}

export default Menu;