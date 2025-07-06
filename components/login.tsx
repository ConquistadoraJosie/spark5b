// components/LoginModal.tsx
"use client"; // This is a Client Component

import React, { useState, useEffect } from 'react';
// If using a CSS module for the modal, uncomment and adjust:
// import styles from './LoginModal.module.css';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    // Effect to handle body scroll lock when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevents scrolling
        } else {
            document.body.style.overflow = ''; // Restores scrolling
        }
        return () => {
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login Attempt:');
        console.log('Username/Email:', usernameOrEmail);
        console.log('Password:', password);

        // --- In a real Next.js application, you would: ---
        // 1. Send this data to an API route (e.g., /api/login)
        //    Example:
        //    fetch('/api/login', {
        //      method: 'POST',
        //      headers: { 'Content-Type': 'application/json' },
        //      body: JSON.stringify({ usernameOrEmail, password }),
        //    })
        //    .then(res => res.json())
        //    .then(data => {
        //      if (data.success) {
        //        alert('Login successful!');
        //        onClose(); // Close modal on success
        //        // Handle user session (e.g., set a cookie, redirect)
        //      } else {
        //        alert('Login failed: ' + data.message);
        //      }
        //    })
        //    .catch(error => {
        //      console.error('Error during login:', error);
        //      alert('An error occurred. Please try again.');
        //    });

        // For demonstration purposes:
        alert('Login data logged to console. In a real app, this would be an API call.');
        // onClose(); // Optionally close after simulated submission
    };

    // If the modal is not open, don't render anything (or render null)
    if (!isOpen) return null;

    return (
        <div className="modal-overlay active" onClick={(e) => {
            // Close modal if clicking on the overlay directly
            if (e.target === e.currentTarget) {
                onClose();
            }
        }}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="usernameOrEmail">Username or Guardian Email:</label>
                        <input
                            type="text"
                            id="usernameOrEmail"
                            name="usernameOrEmail"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-submit-button">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;