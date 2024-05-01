import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/users', {
        user: {
          email,
          password,
        },
      });
      // navigate('/');
    } catch (error) {
      setErrorMessage('Invalid Email or Password');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1>Sign up</h1>
      { errorMessage ? <p className="text-red-600">{errorMessage}</p> : null}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">Sign In</button>
        <br />
        {/* <p><Link to="/">Sign Up</Link></p> */}
      </form>
    </>
  );
};

export default SignUp;
