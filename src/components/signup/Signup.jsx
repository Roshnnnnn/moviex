// import { useState } from "react";
// import "./style.scss";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [useEmail, setUseEmail] = useState(true);
//   const [passwordError, setPasswordError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError(true);
//       return;
//     }

//     console.log("Form submitted:", formData);
//     setPasswordError(false);
//   };

//   const handleEmailBlur = () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email && !emailPattern.test(formData.email)) {
//       console.log("Invalid email format");
//     }
//   };

//   return (
//     <div className="signupFormContainer">
//       <form className="signupForm" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
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
//           <label htmlFor="userName">Username</label>
//           <input
//             type="text"
//             id="userName"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {useEmail ? (
//           <div>
//             <div className="formGroup">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={handleEmailBlur}
//                 required
//               />
//             </div>
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
//           {passwordError && (
//             <span className="errorText">Passwords do not match</span>
//           )}
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
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
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
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }

    console.log("Form submitted:", formData);
    setPasswordError(false);
    // Add your logic to handle signup (e.g., API call, authentication, etc.)
  };

  const handleEmailBlur = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      console.log("Invalid email format");
      // You can set an error state or perform validation feedback here
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
        <div className="alreadyHaveAccount">
          <p>Already have an account?</p>
          <span>
            <Link to="/login" className="loginLink">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
