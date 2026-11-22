import React, { useState } from 'react';

function EyeIcon({ visible }) {
  return visible ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.9 5.2A10.7 10.7 0 0 1 12 5c5.1 0 8.6 4.3 9.5 6-.4.8-1.3 2-2.6 3.1M6.2 6.3C4.2 7.5 2.9 9.5 2.5 11c.9 1.7 4.4 6 9.5 6 1 0 1.9-.2 2.8-.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Register({ onSwitchToSignIn }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [notice, setNotice] = useState('');

  function submitRegistration(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password !== confirmPassword) {
      setNotice('Passwords do not match.');
      event.currentTarget.elements.confirmPassword.focus();
      return;
    }

    setNotice('Your account is ready to connect to an authentication service.');
  }

  return (
    <div className="form-wrap register-form-wrap">
      <div className="mobile-brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M16 3.5 19.2 12.8 28.5 16l-9.3 3.2L16 28.5l-3.2-9.3L3.5 16l9.3-3.2L16 3.5Z"
              fill="currentColor"
            />
            <circle cx="16" cy="16" r="2.3" fill="#17261F" />
          </svg>
        </span>
        <span>northstar</span>
      </div>

      <div className="form-heading">
        <p className="form-kicker">GET STARTED</p>
        <h2 id="register-heading">Create your account</h2>
        <p className="form-subtitle">Join your team and find your focus.</p>
      </div>

      <form onSubmit={submitRegistration}>
        <label className="field-label" htmlFor="full-name">Full name</label>
        <div className="input-wrap">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="6.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3.5 17c.6-3.1 3-5 6.5-5s5.9 1.9 6.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input autoComplete="name" id="full-name" name="fullName" placeholder="Jordan Taylor" required type="text" />
        </div>

        <label className="field-label" htmlFor="register-email">Email address</label>
        <div className="input-wrap">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="m3.5 5.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input autoComplete="email" id="register-email" name="email" placeholder="you@company.com" required type="email" />
        </div>

        <label className="field-label" htmlFor="register-password">Password</label>
        <div className="input-wrap">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6.5 8.5V6a3.5 3.5 0 1 1 7 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="13" r="1" fill="currentColor" />
          </svg>
          <input autoComplete="new-password" id="register-password" name="password" minLength="8" placeholder="Create a password" required type={passwordVisible ? 'text' : 'password'} />
          <button aria-label={passwordVisible ? 'Hide password' : 'Show password'} aria-pressed={passwordVisible} className="visibility-button" onClick={() => setPasswordVisible((visible) => !visible)} type="button">
            <EyeIcon visible={passwordVisible} />
          </button>
        </div>

        <label className="field-label" htmlFor="confirm-password">Confirm password</label>
        <div className="input-wrap">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6.5 8.5V6a3.5 3.5 0 1 1 7 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="13" r="1" fill="currentColor" />
          </svg>
          <input autoComplete="new-password" id="confirm-password" name="confirmPassword" minLength="8" placeholder="Repeat your password" required type={confirmVisible ? 'text' : 'password'} />
          <button aria-label={confirmVisible ? 'Hide confirmation password' : 'Show confirmation password'} aria-pressed={confirmVisible} className="visibility-button" onClick={() => setConfirmVisible((visible) => !visible)} type="button">
            <EyeIcon visible={confirmVisible} />
          </button>
        </div>

        <label className="remember-option terms-option">
          <input name="terms" type="checkbox" required />
          <span>I agree to the Terms and Privacy Policy</span>
        </label>

        <button className="submit-button" type="submit">
          Create account
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p aria-live="polite" className="form-notice">{notice}</p>
      </form>

      <p className="signup-prompt">
        Already have an account? <button className="inline-link" onClick={onSwitchToSignIn} type="button">Sign in</button>
      </p>
    </div>
  );
}

export default Register;
