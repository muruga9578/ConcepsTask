/**
 * Registration Form Page
 * Comprehensive form with validation for user registration
 */
import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        department: '',
        state: '',
        city: '',
        address: '',
        currentlyWorking: 'yes',
        experience: [],
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        const required = ['fullName', 'email', 'contactNumber', 'department', 'state', 'city'];

        required.forEach((field) => {
            if (!formData[field] || (typeof formData[field] === 'string' && !formData[field].trim())) {
                newErrors[field] = 'Required';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const newExperience = [...formData.experience];
            if (checked) {
                newExperience.push(value);
            } else {
                const index = newExperience.indexOf(value);
                if (index > -1) newExperience.splice(index, 1);
            }
            setFormData((prev) => ({ ...prev, experience: newExperience }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div className="registration-container">
            <form className="modern-registration-form" onSubmit={handleSubmit}>
                <div className="reg-grid">
                    <div className="form-item">
                        <label className="reg-label">Full Name*</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name*"
                            className={`reg-input ${errors.fullName ? 'error' : ''}`}
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label className="reg-label">Email Address*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address*"
                            className={`reg-input ${errors.email ? 'error' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label className="reg-label">Contact Number*</label>
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Contact Number*"
                            className={`reg-input ${errors.contactNumber ? 'error' : ''}`}
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label className="reg-label">Department*</label>
                        <div className="select-wrapper">
                            <select
                                name="department"
                                className={`reg-select ${errors.department ? 'error' : ''}`}
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="">Department</option>
                                <option value="IT">IT</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-item">
                        <label className="reg-label">State*</label>
                        <div className="select-wrapper">
                            <select
                                name="state"
                                className={`reg-select ${errors.state ? 'error' : ''}`}
                                value={formData.state}
                                onChange={handleChange}
                            >
                                <option value="">State*</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="KA">Karnataka</option>
                                <option value="MH">Maharashtra</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-item">
                        <label className="reg-label">City*</label>
                        <div className="select-wrapper">
                            <select
                                name="city"
                                className={`reg-select ${errors.city ? 'error' : ''}`}
                                value={formData.city}
                                onChange={handleChange}
                            >
                                <option value="">City*</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-item full-width" style={{ marginTop: '1.5rem' }}>
                    <label className="reg-label">Address</label>
                    <textarea
                        name="address"
                        placeholder="Address"
                        className="reg-textarea"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-item full-width" style={{ marginTop: '1.5rem' }}>
                    <label className="reg-label">Currently Working or not</label>
                    <div className="radio-group">
                        <label className="radio-item">
                            <input
                                type="radio"
                                name="currentlyWorking"
                                value="yes"
                                checked={formData.currentlyWorking === 'yes'}
                                onChange={handleChange}
                            />
                            <span className="radio-circle"></span>
                            yes
                        </label>
                        <label className="radio-item">
                            <input
                                type="radio"
                                name="currentlyWorking"
                                value="no"
                                checked={formData.currentlyWorking === 'no'}
                                onChange={handleChange}
                            />
                            <span className="radio-circle"></span>
                            no
                        </label>
                    </div>
                </div>

                <div className="form-item full-width" style={{ marginTop: '1.5rem' }}>
                    <label className="reg-label">Years of Experience</label>
                    <div className="checkbox-group-vertical">
                        <label className="check-item">
                            <input
                                type="checkbox"
                                name="experience"
                                value="1 year"
                                checked={formData.experience.includes('1 year')}
                                onChange={handleChange}
                            />
                            <span className="check-box"></span>
                            1 year
                        </label>
                        <label className="check-item">
                            <input
                                type="checkbox"
                                name="experience"
                                value="2+ year"
                                checked={formData.experience.includes('2+ year')}
                                onChange={handleChange}
                            />
                            <span className="check-box"></span>
                            2+ year
                        </label>
                        <label className="check-item">
                            <input
                                type="checkbox"
                                name="experience"
                                value="4+ year"
                                checked={formData.experience.includes('4+ year')}
                                onChange={handleChange}
                            />
                            <span className="check-box"></span>
                            4+ year
                        </label>
                    </div>
                </div>

                <div className="form-actions-reg">
                    <button type="submit" className="reg-submit-btn">Submit</button>
                    {submitted && <span className="reg-success">Submitted Successfully!</span>}
                </div>
            </form>
        </div>
    );
};

export default Registration;
