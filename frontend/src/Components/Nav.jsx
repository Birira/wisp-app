import React from 'react'
import cart_icon from "../assets/images.png"
import { Link } from 'react-router-dom';
import { } from "../css/Nav.css"

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to="/Cart">
                        <img src={cart_icon}></img>
                        <div className="nav-cart-count">0</div>
                    </Link>

                </div>

            </div>
        </nav>
    )
}

export default Nav;
