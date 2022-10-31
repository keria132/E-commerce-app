import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.scss'
const searchIcon = require("./Search.png"),
cartIcon = require("./Cart.png"),
userIcon = require("./User.png");

function NavMenu(){
    return(

            <nav className='navbar navbar-expand-md navigation'>
                <div className='container-fluid'>

                    <a className='navbar-brand navigation__logo text-center ms-2' href='#'>Avion</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ps-2" id="navbarNav">

                        <ul className='navbar-nav flex-fill justify-content-center menu'>

                            <li className="nav-item menu__item">
                                <a className='nav-link active' aria-current="page" href='#'>Home</a>
                            </li>

                            <li className="nav-item menu__item">
                                <a className='nav-link' href='#'>Products</a>
                            </li>

                            <li className="nav-item dropdown menu__item">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Some category</a></li>
                                    <li><a className="dropdown-item" href="#">Some category</a></li>
                                </ul>
                            </li>

                            <li className="nav-item menu__item">
                                <a className='nav-link' href="#">Cart</a>
                            </li>

                        </ul>

                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn">
                                <img src={searchIcon} className="navigation__search" alt="search"/>
                            </button>
                            <button className="btn">
                                <img src={cartIcon} className="navigation__cart" alt='cart'/>
                            </button>
                            <button className="btn">
                                <img src={userIcon} className="navigation__profile" alt='profile'/>
                            </button>
                        </div>

                    </div>
                </div>

            </nav>
        
    )
}

export default NavMenu;