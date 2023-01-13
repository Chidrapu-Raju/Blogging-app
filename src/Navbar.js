import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="Navbar">
            <h2>Blogging App</h2>
            <div className="links">
                <Link to="/" className='link1'>
                    <b>Home</b>
                </Link>
                <Link to="/create" className='link2'>
                    New Blog
                </Link>
            </div>
        </div>
    )
}

export default Navbar;