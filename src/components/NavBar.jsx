import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav>
            <ul className='ul-nav'>
                <li className='li-nav'><Link className='nav-link' to="./">Hem</Link></li>
                <li className='li-nav'><Link className='nav-link' to="./rooms">Våra Rum</Link></li>
                <li className='li-nav'><Link className='nav-link' to="./bookings">Dina Bokningar</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;