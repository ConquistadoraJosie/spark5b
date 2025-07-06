'use client';

import LoginModal from '@/components/login';

<div className="page-content">

    <form id="loginForm">
        <div className="form-group">
            <label htmlFor="usernameOrEmail">Username or Guardian Email:</label>
            <input type="text" id="usernameOrEmail" name="usernameOrEmail" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-submit-button">Log In</button>
    </form>
</div>

export default function LoginPage() {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <LoginModal isOpen={true} onClose={() => { }} />
        </div>
    );
}