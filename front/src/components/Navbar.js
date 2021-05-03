import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        <img src='/images/logo.svg' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item-search'>
                            <span className="fa fa-search icon-search"></span>
                            <input type="text" className="form-control" placeholder="O que está procurando?" />
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i className="far fa-user"></i>Minha conta
                            </Link>
                        </li>
                    </ul>
                    <Link to='/products' className='nav-links cart' onClick={closeMobileMenu}>
                        <div id="cart-item">
                            <img src='/images/shopping-cart.svg' />
                            <span className='cart-itens'>1</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

