import React from "react";

const Hamburger = () => (


    <header className="navbar">
        <div className="navbar-left">
            <div className="logo">MyBrand</div>
            <nav className="nav-links main-nav">
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Session</a></li>
                </ul>
            </nav>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

        <nav className="nav-links auth-nav">
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
    </header>
);

export default Hamburger;
