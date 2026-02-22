/**
 * Registration Form Page
 * Comprehensive form with validation for user registration
 */
import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        department: '',
        designation: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    /**
     * Validate all form fields
     */
    const validate = () => {
        const newErrors = {};
        const required = ['firstName', 'lastName', 'email', 'phone'];

        required.forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())} is required`;
            }
        });

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (formData.phone && !/^[0-9+ -]{8,15}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            department: '',
            designation: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
        });
        setErrors({});
        setSubmitted(false);
    };

    /**
     * Render a form input field with error handling
     */
    const renderField = (name, label, type = 'text', placeholder = '') => (
        <div className="form-group">
            <label htmlFor={`reg-${name}`}>{label}</label>
            <div className="input-wrapper">
                <input
                    id={`reg-${name}`}
                    type={type}
                    name={name}
                    placeholder={placeholder || `Enter ${label}`}
                    value={formData[name]}
                    onChange={handleChange}
                    className={errors[name] ? 'error' : ''}
                />
            </div>
            {errors[name] && <p className="error-message">{errors[name]}</p>}
        </div>
    );

    return (
        <>
            <div className="page-header">
                <h1>Registration Form</h1>
                <p>Complete the form below to register</p>
            </div>

            <div className="registration-form-container">
                {/* Success Message */}
                {submitted && (
                    <div
                        style={{
                            padding: '1rem 1.5rem',
                            background: 'var(--success-bg)',
                            color: 'var(--success)',
                            borderRadius: 'var(--border-radius)',
                            marginBottom: '1.25rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            animation: 'fadeInUp 0.3s ease',
                        }}
                    >
                        ✅ Registration submitted successfully!
                    </div>
                )}

                <form className="registration-form" onSubmit={handleSubmit} noValidate>
                    {/* Personal Information */}
                    <h3 className="card-title">Personal Information</h3>
                    <div className="form-row">
                        {renderField('firstName', 'First Name', 'text', 'Enter first name')}
                        {renderField('lastName', 'Last Name', 'text', 'Enter last name')}
                    </div>
                    <div className="form-row">
                        {renderField('email', 'Email', 'email', 'email@company.com')}
                        {renderField('phone', 'Phone Number', 'tel', '+91 XXXXX XXXXX')}
                    </div>

                    {/* Work Information */}
                    <h3 className="card-title" style={{ marginTop: '1.5rem' }}>Work Information</h3>
                    <div className="form-row">
                        {renderField('company', 'Company', 'text', 'Company name')}
                        {renderField('department', 'Department', 'text', 'Department name')}
                    </div>
                    <div className="form-row">
                        {renderField('designation', 'Designation', 'text', 'Job title')}
                        <div className="form-group">
                            <label htmlFor="reg-country">Country</label>
                            <div className="input-wrapper">
                                <select
                                    id="reg-country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.625rem 0.875rem',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: 'var(--border-radius)',
                                        fontSize: '0.875rem',
                                        color: formData.country ? 'var(--text-primary)' : 'var(--text-muted)',
                                        background: 'var(--bg-secondary)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <option value="">Select Country</option>
                                    <option value="IN">India</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <h3 className="card-title" style={{ marginTop: '1.5rem' }}>Address</h3>
                    <div className="form-group">
                        <label htmlFor="reg-address">Street Address</label>
                        <div className="input-wrapper">
                            <input
                                id="reg-address"
                                type="text"
                                name="address"
                                placeholder="Enter street address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        {renderField('city', 'City', 'text', 'Enter city')}
                        {renderField('state', 'State', 'text', 'Enter state')}
                    </div>

                    {/* Actions */}
                    <div className="form-actions">
                        <button type="submit" className="btn-primary" style={{ width: 'auto' }}>
                            Submit Registration
                        </button>
                        <button type="button" className="btn-secondary" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Registration;
