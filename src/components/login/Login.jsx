import "./style.scss";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
  });
  const [usePhoneNumber, setUsePhoneNumber] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement your login logic here
  };

  const handleSwitch = () => {
    setUsePhoneNumber(!usePhoneNumber);
    // Clear form fields when switching
    setFormData({
      email: "",
      password: "",
      mobile: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
        <button className="switch-button" onClick={handleSwitch}>
          {usePhoneNumber ? "Login with email" : "Login with phone number"}
        </button>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        {usePhoneNumber ? (
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <button
          className="signup-button"
          onClick={() => console.log("Sign up clicked")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
