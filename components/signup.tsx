'use client'; // This line is necessary for Next.js to treat this file as a client component
// components/SignUpForm.js (or similar)
import React, { useState } from 'react';
// import styles from './SignupForm.module.css'; // If using CSS Modules

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        guardianFirstName: '',
        guardianLastName: '',
        phoneNumber: '',
        email: '',
        childFirstName: '',
        childLastName: '',
        childBirthday: '',
        childAge: '',
        schoolName: '',
        username: '',
        password: '',
        subscribe: '', // 'yes' or 'no'
    });

    interface FormData {
        guardianFirstName: string;
        guardianLastName: string;
        phoneNumber: string;
        email: string;
        childFirstName: string;
        childLastName: string;
        childBirthday: string;
        childAge: string;
        schoolName: string;
        username: string;
        password: string;
        subscribe: string; // 'yes' or 'no'
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { // Line 21
        const { name, value, type } = e.target;
        setFormData((prevData: FormData) => ({
            ...prevData,
            [name]: type === 'radio' ? value : value, // Line 24: This line is already simplified and correct for radio buttons
        }));
    }; // Line 25

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Line 27
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you would typically send this data to an API endpoint
        // using fetch or a library like axios.
        alert('Form submitted! Check console for data.');
    }; // Line 36

    return (
        <div className="signup-form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <h3>Guardian Information</h3>
                    <div className="form-group">
                        <label htmlFor="guardianFirstName">Guardian First Name:</label>
                        <input
                            type="text"
                            id="guardianFirstName"
                            name="guardianFirstName"
                            value={formData.guardianFirstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guardianLastName">Guardian Last Name:</label>
                        <input
                            type="text"
                            id="guardianLastName"
                            name="guardianLastName"
                            value={formData.guardianLastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Child&apos;s Information</h3>
                    <div className="form-group">
                        <label htmlFor="childFirstName">Child&apos;s First Name:</label>
                        <input
                            type="text"
                            id="childFirstName"
                            name="childFirstName"
                            value={formData.childFirstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childLastName">Child&apos;s Last Name:</label>
                        <input
                            type="text"
                            id="childLastName"
                            name="childLastName"
                            value={formData.childLastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childBirthday">Child&apos;s Birthday:</label>
                        <input
                            type="date"
                            id="childBirthday"
                            name="childBirthday"
                            value={formData.childBirthday}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childAge">Child&apos;s Age:</label>
                        <input
                            type="number"
                            id="childAge"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            min="0" // Assuming age cannot be negative
                            max="18" // Or whatever maximum age is appropriate
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="schoolName">Name of the school your child attends:</label>
                        <input
                            type="text"
                            id="schoolName"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Account Information</h3>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Newsletter & SMS Subscription</h3>
                    <div className="form-group">
                        <p>Do you wish to subscribe to our newsletter and text messages for upcoming events?</p>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="subscribe"
                                    value="yes"
                                    checked={formData.subscribe === 'yes'}
                                    onChange={handleChange}
                                    required
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="subscribe"
                                    value="no"
                                    checked={formData.subscribe === 'no'}
                                    onChange={handleChange}
                                    required
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="submit-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;