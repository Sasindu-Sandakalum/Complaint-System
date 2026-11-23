import './Login.css'

export default function Login() {
  return (
    <div className="login-page">
    <main className="login-layout">
      <section className="campus-panel" aria-labelledby="system-name">
        <div className="campus-copy">
          <h1 id="system-name">Anonymous Complaint System</h1>
          <p>Your voice matters. Share your concerns, feedback, and ideas to help improve the NIBM community.</p>
        </div>
      </section>
      <section className="auth-panel" aria-labelledby="login-heading">
        <div className="auth-content">
          <img className="nibm-logo" src="/nibm-logo.png" alt="NIBM The City University" width="3509" height="900" />
          <h2 id="login-heading">Welcome Back</h2>
          <form method="post">
            <p className="session-notice response-message" id="session-expired" role="status">Your session has expired. Please log in again.</p>
            <div className="field">
              <div className="input-box">
                <input name="username" aria-label="Username or NIBM Email" placeholder="Enter your username or NIBM email" autoComplete="username" autoCapitalize="none" spellCheck={false} required aria-describedby="username-error" />
              </div>
              <p className="field-error required-error" id="username-error">Please enter your username or NIBM email.</p>
            </div>
            <div className="field">
              <div className="input-box">
                <input type="password" name="password" aria-label="Password" placeholder="Enter your password" autoComplete="current-password" required aria-describedby="password-error" />
                <svg className="password-eye" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>
              </div>
              <p className="field-error required-error" id="password-error">Please enter your password.</p>
            </div>
            <p className="field-error response-message" id="incorrect-credentials" role="alert">The username/email or password you entered is incorrect. Please try again.</p>
            <button className="login-button" type="submit">Login</button>
          </form>
          <p className="register-line">Don't have an account? <a href="/register/verify-email">Register</a></p>
        </div>
      </section>
    </main>
    <footer className="login-footer">
      <span>© 2026 NIBM. All rights reserved.</span>
      <div className="policy-links">
        <a role="link" aria-disabled="true">Privacy Policy</a>
        <a role="link" aria-disabled="true">Terms of Use</a>
      </div>
    </footer>
  </div>
  )
}
