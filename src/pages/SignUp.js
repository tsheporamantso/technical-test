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
      <h1 className="text-black uppercase font-bold text-center m-2">Sign up</h1>
      {errorMessage ? <p className="text-red-600 text-center">{errorMessage}</p> : null}
      <form
        className="flex flex-col items-center p-12 w-3/12 rounded-3xl m-auto border-2 border-slate-300"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button
          className="py-2 px-5 bg-blue-500 text-white border-none rounded-md"
          type="submit"
        >
          Sign Up
        </button>
        <br />
        {/* <Link to="/">Sign In</Link> */}
      </form>
    </>
  );
};

export default SignUp;
