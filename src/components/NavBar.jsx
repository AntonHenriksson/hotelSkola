import { Link } from 'react-router-dom';


// nav bar for top using Link which is recommended for modern react routing
// apparently this is a a-href but updates faster for clientside routing
function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className='ul-nav'>
                <li className='li-nav'><Link className='nav-link' to="./">Hem</Link></li>
                <li className='li-nav'><Link className='nav-link' to="./rooms">Rum</Link></li>
                <li className='li-nav'><Link className='nav-link' to="./bookings">Bokningar</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;