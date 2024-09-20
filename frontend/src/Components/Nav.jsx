import React from 'react'
import cart_icon from "../assets/icon.svg"
import { Link } from 'react-router-dom';
import "../css/Nav.css"

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4">
                <Link to="/" className="navbar-brand">Inicio</Link>
            </div>
            <div className="row px-4">
                <div className="col">
                    <Link to="/Cart">
                        <img width={40} height={40} src={cart_icon}></img>
                    </Link></div>
                <div className="col nav-cart-count">0</div>
            </div>

        </nav>
    )
}

export default Nav;
