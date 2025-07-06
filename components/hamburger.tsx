'use client';
import React from "react";

const Hamburger = () => (
    <>
        <header className="navbar">
            <div className="navbar-left">
                <div className="logo">MyBrand</div>
                <nav className="desktop-nav-links">
                    <ul>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Upcoming Sessions</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </nav>
            </div>

            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

            <nav className="mobile-menu">
                <ul>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Upcoming Sessions</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </nav>

            <div className="navbar-right">
                <nav className="desktop-auth-links">
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
);

export default Hamburger;
