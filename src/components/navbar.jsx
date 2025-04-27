import react from "react";
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            <button>Get Started</button>
        </div>
    )
}
export default Navbar;