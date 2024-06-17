// import { useState } from "react";
// import "./style.scss";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [useEmail, setUseEmail] = useState(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="signupFormContainer">
//       <form className="signupForm" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         {useEmail ? (
//           <div className="formGroup">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         ) : (
//           <div className="formGroup">
//             <label htmlFor="mobile">Mobile Number</label>
//             <input
//               type="text"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         )}
//         <div className="switchOption">
//           <button
//             type="button"
//             className="switchButton"
//             onClick={() => setUseEmail(!useEmail)}
//           >
//             {useEmail ? "Sign up with mobile number" : "Sign up with email"}
//           </button>
//         </div>
//         <div className="formGroup">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="submitButton">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import "./style.scss";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [useEmail, setUseEmail] = useState(true);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }

    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    // Reset password error state
    setPasswordError(false);
  };

  const handleEmailBlur = () => {
    // Check if the entered email is in a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      console.log("Invalid email format");
      // You can handle the invalid email format state here
    }
  };

  return (
    <div className="signupFormContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="switchOption">
          <button
            type="button"
            className="switchButton"
            onClick={() => setUseEmail(!useEmail)}
          >
            {useEmail ? "Sign up with mobile number" : "Sign up with email"}
          </button>
        </div>
        <div className="formGroup">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        {useEmail ? (
          <div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmailBlur}
                required
              />
            </div>
          </div>
        ) : (
          <div className="formGroup">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {passwordError && (
            <span className="errorText">Passwords do not match</span>
          )}
        </div>
        <button type="submit" className="submitButton">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
