import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/users', {
        user: {
          email,
          password,
        },
      });
      navigate('/layout');
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
      <h1 className="text-black text-5xl font-bold text-center my-5">Sign Up</h1>
      {errorMessage ? <p className="text-red-600 my-2 text-center">{errorMessage}</p> : null}
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
        <p className="py-2 px-5 text-black border-2 border-slate-300 rounded-md">
          <Link to="/">Sign In</Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
