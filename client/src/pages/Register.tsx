import './Styles/Register.css'

export default function Register() {
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
          <form aria-label="Create Your Account" noValidate>
            <div className="field">
              <label htmlFor="register-username">Username</label>
              <div className="input-box">
                <input id="register-username" name="username" autoComplete="username" placeholder="Enter your username" required />
              </div>
              <p hidden role="alert">Please enter your username.</p>
              <p hidden role="alert">Username already exists.</p>
            </div>
            <div className="field">
              <label htmlFor="register-password">Password</label>
              <div className="input-box">
                <input id="register-password" type="password" name="password" autoComplete="new-password" placeholder="Enter your password" aria-describedby="password-help" required />
              </div>
              <small id="password-help">Choose a strong password to keep your account secure.</small>
              <p hidden role="alert">Please enter your password.</p>
              <p hidden role="alert">Please choose a stronger password to help keep your account secure.</p>
            </div>
            <div className="field">
              <label htmlFor="register-confirm">Confirm Password</label>
              <div className="input-box">
                <input id="register-confirm" type="password" name="confirmation" autoComplete="new-password" placeholder="Re-enter your password" required />
              </div>
              <p hidden role="alert">Please confirm your password.</p>
              <p hidden role="alert">The passwords you entered do not match. Please try again.</p>
            </div>
            <button className="login-button" type="button">Register</button>
            <p hidden role="status">Your account has been registered successfully.</p>
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
