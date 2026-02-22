/**
 * Verify OTP Page
 * 6-digit code input with auto-focus, countdown timer, and resend
 */
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [timer, setTimer] = useState(37);
    const inputRefs = useRef([]);

    // Countdown timer for resend
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    /**
     * Handle OTP digit input with auto-focus to next field
     */
    const handleChange = (element, index) => {
        const value = element.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    /**
     * Handle backspace to go to previous field
     */
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = otp.join('');
        if (code.length === 6) {
            navigate('/dashboard');
        }
    };

    const handleResend = () => {
        setTimer(37);
        setOtp(new Array(6).fill(''));
        inputRefs.current[0]?.focus();
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                {/* Phone Icon */}
                <div className="phone-icon">
                    <div className="phone-icon-inner">📱</div>
                </div>

                <h1>Verify your phone</h1>
                <p className="subtitle">
                    Enter the verification code we sent to<br />
                    <strong>******7859</strong>
                </p>

                <form onSubmit={handleSubmit}>
                    {/* OTP Inputs */}
                    <div className="otp-container">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                className="otp-input"
                                value={digit}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onFocus={(e) => e.target.select()}
                                autoFocus={index === 0}
                            />
                        ))}
                    </div>

                    {/* Resend Section */}
                    <p className="resend-text">
                        Didn't receive a code? ({timer}s){' '}
                        <a
                            href="#resend"
                            onClick={(e) => {
                                e.preventDefault();
                                if (timer === 0) handleResend();
                            }}
                            style={{ opacity: timer > 0 ? 0.5 : 1, pointerEvents: timer > 0 ? 'none' : 'auto' }}
                        >
                            Resend
                        </a>
                    </p>

                    <button type="submit" className="btn-primary">
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOTP;
