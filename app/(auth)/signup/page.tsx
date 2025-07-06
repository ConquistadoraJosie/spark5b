import React from "react";
import '@/components/signup'

const SignupPage = () => (
    <>
        {/* You can use next/head or Helmet for meta tags if needed */}
        <div className="signup-form-container">
            <h2>Create Your Account</h2>
            <form>
                <div className="form-section">
                    <h3>Guardian Information</h3>
                    <div className="form-group">
                        <label htmlFor="guardianFirstName">Guardian First Name:</label>
                        <input type="text" id="guardianFirstName" name="guardianFirstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guardianLastName">Guardian Last Name:</label>
                        <input type="text" id="guardianLastName" name="guardianLastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="e.g., 123-456-7890" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Child&apos;s Information</h3>
                    <div className="form-group">
                        <label htmlFor="childFirstName">Child&apos;s First Name:</label>
                        <input type="text" id="childFirstName" name="childFirstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childLastName">Child&apos;s Last Name:</label>
                        <input type="text" id="childLastName" name="childLastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childBirthday">Child&apos;s Birthday:</label>
                        <input type="date" id="childBirthday" name="childBirthday" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childAge">Child&apos;s Age:</label>
                        <input type="number" id="childAge" name="childAge" min="0" max="18" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="schoolName">Name of the school your child attends:</label>
                        <input type="text" id="schoolName" name="schoolName" required />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Account Information</h3>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Newsletter & SMS Subscription</h3>
                    <div className="form-group">
                        <p>Do you wish to subscribe to our newsletter and text messages for upcoming events?</p>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="subscribe" value="yes" required />
                                Yes
                            </label>
                            <label>
                                <input type="radio" name="subscribe" value="no" required />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="submit-button">Sign Up</button>
            </form>
        </div>
    </>
);

export default SignupPage;