import './Register.css';

import type { FormEvent } from 'react';
import { useState } from 'react';

type RegistrationField = 'username' | 'password' | 'confirmation';

type ValidationError = {
  field: RegistrationField;
  message: string;
}

export default function Register() {

  const [error, setError] = useState<ValidationError | null>(null);

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmation = formData.get('confirmation');

    if (typeof username !== 'string') {

      setError({
        field: 'username', 
        message: 'Please enter a valid username.' 
      });

      return;
    }
    if (username === '') {

      setError({
        field: 'username', 
        message: 'Username is required.' 
      });

      return;
    }
    if (username.length < 3 || username.length > 30) {
      setError({
        field: 'username', 
        message: 'Username must be between 3 and 30 characters long.' 
      });
      return;
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      setError({
        field: 'username', 
        message: 'Username can only contain letters, numbers, and underscores.' 
      });
      return;
    }
    if (typeof password !== 'string') {
      setError({
        field: 'password',
        message: 'Please enter a valid password.'
      });
      return;
    }
    if (password === '') {
      setError({
        field: 'password',
        message: 'Password is required.'
      });
      return;
    }
    if (password.length < 15 || password.length > 128) {
      setError({
        field: 'password',
        message: 'Password must be between 15 and 128 characters long.'
      });
      return;
    }
    if (typeof confirmation !== 'string') {
      setError({
        field: 'confirmation',
        message: 'Please confirm your password.'
      });
      return;
    }
    if (confirmation === '') {
      setError({
        field: 'confirmation',
        message: 'Please confirm your password.'
      });
      return;
    }
    if (password !== confirmation) {
      setError({
        field: 'confirmation',
        message: 'Passwords do not match.'
      });
      return;
    }
    
    setError(null);
    console.log('Validation passed. Proceed with registration logic here.');

  }

  return (
    <div className="login-page registration">
      <main className="login-layout">
        <section className="campus-panel" aria-labelledby="system-name">
          <div className="campus-copy">
            <h1 id="system-name">Anonymous Complaint System</h1>
          </div>
        </section>
        <section className="auth-panel" aria-labelledby="register-heading">
          <div className="auth-content">
            <svg className="registration-mark" role="img" aria-label="Anonymous Complaint System logo" viewBox="0 0 48 48" width="44" height="44" fill="none">
              <rect width="48" height="48" rx="12" fill="#253f83" />
              <path d="M24 7l14 5v10c0 8-6 14-14 19-8-5-14-11-14-19V12z" stroke="white" strokeWidth="2" />
              <path d="M17 17h14v10H22l-5 4z" fill="white" />
              <path d="M20 21h8" stroke="#253f83" strokeWidth="2" />
            </svg>
            <h2 id="register-heading">Create Your Account</h2>
            <p className="registration-intro">Your NIBM email has been verified. Complete your registration by creating a username and password.</p>
            <form aria-label="Create Your Account" noValidate onSubmit={handleRegister}>
              <div className="field">
                <label htmlFor="register-username">Username</label>
                <div className={error?.field === 'username' ? "input-box invalid" : "input-box"}>
                  <input id="register-username" name="username" autoComplete="username" placeholder="Enter your username" required />
                </div>
                {error?.field === 'username' && (
                    <p className="validation-error">{error.message}</p>
                  )}
              </div>
              <div className="field">
                <label htmlFor="register-password">Password</label>
                <div className={error?.field === 'password' ? "input-box invalid" : "input-box"}>
                  <input id="register-password" type="password" name="password" autoComplete="new-password" placeholder="Enter your password" aria-describedby="password-help" required />
                </div>
                {error?.field === 'password' && (
                    <p className="validation-error">{error.message}</p>
                  )}
                <small id="password-help">Choose a strong password to keep your account secure.</small>
              </div>
              <div className="field">
                <label htmlFor="register-confirm">Confirm Password</label>
                <div className={error?.field === 'confirmation' ? "input-box invalid" : "input-box"}>
                  <input id="register-confirm" type="password" name="confirmation" autoComplete="new-password" placeholder="Re-enter your password" required />
                </div>
                {error?.field === 'confirmation' && (
                    <p className="validation-error">{error.message}</p>
                  )}
              </div>
              <button className="login-button" type="submit">Register</button>
            </form>
            <p className="register-line">Already have an account? <a href="/login">Login</a></p>
          </div>
        </section>
      </main>
      <footer className="login-footer">
        <span>© 2026 NIBM. All rights reserved.</span>
        <div className="policy-links"><a role="link" aria-disabled="true">Privacy Policy</a><a role="link" aria-disabled="true">Terms of Use</a></div>
      </footer>
    </div>
  )
}
