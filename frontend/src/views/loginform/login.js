// import React from 'react'

// import { Helmet } from 'react-helmet'

// import './login.css'

// const Login = (props) => {
//   return (
//     <div className="login-container">
//       <Helmet>
//         <title>Login - Landify - Tutorial</title>
//         <meta property="og:title" content="Login - Landify - Tutorial" />
//       </Helmet>
//       <div className="login-frame1">
//         <img
//           src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb97f039-e4ff-4645-83b0-68b4d52213f2/03e7439c-94c4-48e4-9cdf-f261c2cb201b?org_if_sml=1387299&amp;force_format=original"
//           alt="Rectangle111246"
//           className="login-rectangle11"
//         />
//         <div className="login-frame2">
//           <span className="login-text">
//             <span>Log in</span>
//           </span>
//           <img
//             src="/external/line11375-ktg.svg"
//             alt="Line11375"
//             className="login-line1"
//           />
//           <span className="login-text2">
//             <span>Username</span>
//           </span>
//           <img
//             src="/external/line21377-9el4.svg"
//             alt="Line21377"
//             className="login-line2"
//           />
//           <span className="login-text4">
//             <span>Password</span>
//           </span>
//           <img
//             src="/external/line31380-rm7.svg"
//             alt="Line31380"
//             className="login-line3"
//           />
//           <img
//             src="/external/rectangle21378-h2j7-200h.png"
//             alt="Rectangle21378"
//             className="login-rectangle2"
//           />
//           <span className="login-text6">
//             <span>Log in</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
// import Logo from "./rectangle21116-a2xb-200h.png"

// const colors = {
//   primary: "#060606",
//   background: "#E0E0E0",
//   disabled: "#D9D9D9"
// }

// const Login = () => {
//   return (
//     <div className="w-full min-h-screen flex items-start">
//       <div className="relative w-1/2 h-full flex flex-col">
//         <div className="absolute top-[20%] left-[10%] flex flex-col">
//           <h1 className="text-4x text-black font-bold my-4">Header</h1>
//           <p className="text-x1 text-black font-normal"> Paragraph</p>
//         </div>
//         <img src={Logo} className="w-full h-full object-cover"/>
//       </div>

//       <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
//         <h1 className="text-x1 text-[#060606] font-semibold">My Brand</h1>
//         <div className="w-full flex flex-col">
//           <h3 className="text-sx1 font-semibold mb-4">Login</h3>
//           <p className="text-sm mb-2">Welcome back</p>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Login


// import { useState } from "react";
// import "./login.css";

// const FormInput = (props) => {
//   const [focused, setFocused] = useState(false);
//   const { label, errorMessage, onChange, id, ...inputProps } = props;

//   const handleFocus = (e) => {
//     setFocused(true);
//   };

//   return (
//     <div className="formInput">
//       <label>{label}</label>
//       <input
//         {...inputProps}
//         onChange={onChange}
//         onBlur={handleFocus}
//         onFocus={() =>
//           inputProps.name === "confirmPassword" && setFocused(true)
//         }
//         focused={focused.toString()}
//       />
//       <span>{errorMessage}</span>
//     </div>
//   );
// };

// export default FormInput;
import React from 'react';
import "./css/style.css"

const Login = (props) => {
  return (
  <>
  
  
        <section class="sign-in">
          <div class="container">
              <div class="signin-content">
                  <div class="signin-image">
                      <figure><img src="images/signin-image.jpg" alt="Loading ..." /></figure>
                      <a href="/signup" class="signup-image-link">Create an account</a>
                  </div>

                  <div class="signin-form">
                      <h2 class="form-title">Log in</h2>
                      <form method="POST" class="register-form" id="login-form">
                          <div class="form-group">
                              <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                              <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                          </div>
                          <div class="form-group">
                              <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                              <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                          </div>
                          <div class="form-group">
                              <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                              <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                          </div>
                          <div class="form-group form-button">
                              <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                          </div>
                      </form>
                      <div class="social-login">
                          <span class="social-label">Or login with</span>
                          <ul class="socials">
                              <li><a href="/placeholder"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                              <li><a href="/placeholder"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                              <li><a href="/placeholder"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        </>

  )
}

export default Login;