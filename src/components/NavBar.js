/*import { useState } from "react";*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    /*const [toggle, setToggle] = useState(false);*/
    const hamburger = <FontAwesomeIcon icon={faBars} />
    const search = <FontAwesomeIcon icon={faSearch}
        style={
            {
            position: 'absolute',
            marginLeft: 257,
            fontSize: 12.5,
            }
        }
    />
    return (
        <nav className="navbar fixed-top">
            <Link className="navbar-brand" to="/usergallerypage">
                <p>pixels</p>
            </Link>
            <form>
                <input type='text' placeholder='What do you want to find?'/>
                {search}
            </form>
            <div className='signin-hamburger'>
                <a href="/signin" className='sign-in'>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-span">{hamburger}</span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mb-auto">
                    <a href='/signup'><li className="nav-item">Sign up</li></a>
                </ul>
            </div>
        </nav>
    )
}