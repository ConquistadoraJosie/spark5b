import React from "react";

const Hamburger = () => (
    <>
        {/* Head elements like <meta> and <title> should be managed with Next.js Head or react-helmet in React apps */}
        {/* Example: 
            <Head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Responsive Grid Layout</title>
              <link rel="stylesheet" href="style.css" />
            </Head>
            */}
        <div className="container">
            <header className="navbar">
                <div className="logo">MyBrand</div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
                <nav className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <div className="column-left">
                    <h2>Welcome!</h2>
                    <p>This is the left column of our two-column layout. It's designed to hold primary content or navigation links.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="column-right">
                    <h2>More Information</h2>
                    <p>This is the right column, often used for sidebars, advertisements, or supplementary content.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2025 MyBrand. All rights reserved.</p>
            </footer>
        </div>
    </>
);

export default Hamburger;
