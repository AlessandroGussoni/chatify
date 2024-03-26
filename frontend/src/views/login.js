import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Landify - Tutorial</title>
        <meta property="og:title" content="Login - Landify - Tutorial" />
      </Helmet>
      <form className="login-form"></form>
      <div className="login-container1">
        <span>Login Page</span>
      </div>
    </div>
  )
}

export default Login
