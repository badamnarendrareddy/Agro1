import { Component } from 'react';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa'; // Added icons
import './index.css';
import { auth } from '../firebase'; // Import Firebase config
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isRegistering: false,
    isRegistered: false,
    errorMsg: '',
    passwordVisible: false,
    confirmPasswordVisible: false, // For confirm password visibility
  };

  success = async (user) => {
    const token = await user.getIdToken(); // Get Firebase token
    Cookie.set('jwt_token', token, { expires: 30 });
    const { history } = this.props;
    history.replace('/');
  };

  unSubmitFailure = (errorMsg) => {
    this.setState({ errorMsg });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({
      confirmPasswordVisible: !prevState.confirmPasswordVisible,
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, isRegistering } = this.state;

    if (isRegistering && password !== confirmPassword) {
      this.setState({ errorMsg: "Passwords don't match!" });
      return;
    }

    try {
      if (isRegistering) {
        // Firebase Registration
        await createUserWithEmailAndPassword(auth, email, password);
        this.setState({
          isRegistering: false,
          isRegistered: true, // Mark registration as complete
          email: '',
          password: '',
          confirmPassword: '',
          errorMsg: '',
        });
      } else {
        // Firebase Login
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.success(userCredential.user);
      }
    } catch (error) {
      this.unSubmitFailure(error.message);
    }
  };

  renderPasswordField = () => {
    const { password, passwordVisible } = this.state;
    return (
      <>
        <label className="input-label1" htmlFor="password">
          *Password
        </label>
        <div className="password-input-wrapper1">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="password-input-field1"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Enter password"
          />
          <button
            type="button"
            className="password-toggle-btn1"
            onClick={this.togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </>
    );
  };

  renderConfirmPasswordField = () => {
    const { confirmPassword, confirmPasswordVisible } = this.state;
    return (
      <>
        <label className="input-labe" htmlFor="confirmPassword">
          *Confirm Password
        </label>
        <div className="password-input-wrapper">
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            className="password-input-field1"
            value={confirmPassword}
            onChange={this.onChangeConfirmPassword}
            placeholder="Confirm your password"
          />
          <button
            type="button"
            className="password-toggle-btn1"
            onClick={this.toggleConfirmPasswordVisibility}
          >
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </>
    );
  };

  renderEmailField = () => {
    const { email } = this.state;
    return (
      <>
        <label className="input-label1" htmlFor="email">
          *Email
        </label>
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            id="email"
            className="email-input-field1"
            value={email}
            onChange={this.onChangeEmail}
            placeholder="Enter your email"
          />
        </div>
      </>
    );
  };

  render() {
    const { isRegistering, isRegistered, errorMsg } = this.state;
    const jwtToken = Cookie.get('jwt_token');
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form-container1">
        <form className="form-container1" onSubmit={this.handleSubmit}>
          <div className="login-header1">
            <img
              className="login-image1"
              src="https://img.icons8.com/?size=100&id=115640&format=png&color=000000"
              alt="website login"
            />
            <h2 className="login-title1">
              {isRegistering ? 'Register' : 'Login'}
            </h2>
          </div>

          {isRegistered && (
            <p className="success-message1">
              Registration successful! Please log in.
            </p>
          )}
          <div className="input-container1">{this.renderEmailField()}</div>
          <div className="input-container1">{this.renderPasswordField()}</div>
          {isRegistering && (
            <div className="input-container1">{this.renderConfirmPasswordField()}</div>
          )}
          <button type="submit" className="login-button1">
            {isRegistering ? 'Register' : 'Login'}
          </button>
          {errorMsg && <p className="error-message1">*{errorMsg}</p>}
          <p>
            {isRegistering
              ? 'Already have an account? '
              : "Don't have an account? "}
            <span
              className="toggle-register1"
              onClick={() =>
                this.setState((prevState) => ({
                  isRegistering: !prevState.isRegistering,
                  isRegistered: false,
                  errorMsg: '',
                }))
              }
            >
              {isRegistering ? 'Login' : 'Register'}
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
