import React, { useState } from 'react';
import Register from './Register.jsx';

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path
          d="M16 3.5 19.2 12.8 28.5 16l-9.3 3.2L16 28.5l-3.2-9.3L3.5 16l9.3-3.2L16 3.5Z"
          fill="currentColor"
        />
        <circle cx="16" cy="16" r="2.3" fill="#17261F" />
      </svg>
    </span>
  );
}

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

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notice, setNotice] = useState('');
  const [view, setView] = useState('sign-in');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice('Your sign-in form is ready to connect to an authentication service.');
  }

  return (
    <main className="page-shell">
      <section className="visual-panel" aria-label="About Northstar">
        <div className="visual-grid" aria-hidden="true" />
        <a className="brand" href="#" aria-label="Northstar home">
          <BrandMark />
          <span>northstar</span>
        </a>

        <div className="visual-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A clearer way to work
          </div>
          <h1>
            Find your
            <br />
            focus.
            <br />
            <span>Go further.</span>
          </h1>
          <p>
            Your ideas, projects, and people — all moving in the same
            direction.
          </p>
        </div>

        <div className="visual-footer">
          <div className="avatar-stack" aria-hidden="true">
            <span>J</span>
            <span>M</span>
            <span>A</span>
            <span>+</span>
          </div>
          <p>
            <strong>Good things happen</strong>
            <br />
            when we work together.
          </p>
        </div>
        <div className="panel-orbit orbit-one" aria-hidden="true" />
        <div className="panel-orbit orbit-two" aria-hidden="true" />
      </section>

      {view === 'register' ? (
        <section className="form-panel" aria-labelledby="register-heading">
          <Register onSwitchToSignIn={() => setView('sign-in')} />
          <span className="copyright">© 2025 Northstar, Inc.</span>
        </section>
      ) : (
      <section className="form-panel" aria-labelledby="welcome-heading">
        <div className="form-wrap">
          <div className="mobile-brand">
            <BrandMark />
            <span>northstar</span>
          </div>
          <div className="form-heading">
            <p className="form-kicker">WELCOME BACK</p>
            <h2 id="welcome-heading">Sign in to your account</h2>
            <p className="form-subtitle">
              Pick up right where you left off.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="field-label" htmlFor="email">
              Email address
            </label>
            <div className="input-wrap">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect
                  x="2.5"
                  y="4"
                  width="15"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m3.5 5.5 6.5 5 6.5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                autoComplete="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </div>

            <div className="password-label-row">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <a className="text-link" href="mailto:support@northstar.example">
                Forgot password?
              </a>
            </div>
            <div className="input-wrap">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect
                  x="3.5"
                  y="8.5"
                  width="13"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 8.5V6a3.5 3.5 0 1 1 7 0v2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="13" r="1" fill="currentColor" />
              </svg>
              <input
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                type={passwordVisible ? 'text' : 'password'}
              />
              <button
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                aria-pressed={passwordVisible}
                className="visibility-button"
                onClick={() => setPasswordVisible((visible) => !visible)}
                type="button"
              >
                <EyeIcon visible={passwordVisible} />
              </button>
            </div>

            <div className="form-options">
              <label className="remember-option">
                <input name="remember" type="checkbox" />
                <span>Keep me signed in</span>
              </label>
            </div>

            <button className="submit-button" type="submit">
              Sign in
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10h12m-5-5 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p aria-live="polite" className="form-notice">
              {notice}
            </p>
          </form>

          <p className="signup-prompt">
            New to Northstar? <button className="inline-link" onClick={() => setView('register')} type="button">Create an account</button>
          </p>
          <p className="legal-note">
            By continuing, you agree to our <a href="#terms">Terms</a> and{' '}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
        <span className="copyright">© 2025 Northstar, Inc.</span>
      </section>
      )}
    </main>
  );
}

export default App;
