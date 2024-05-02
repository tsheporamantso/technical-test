import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignIn = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email,
          password,
        },
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userId', response.data.status.data.id);

        setLoggedIn(true);
        navigate('/layout');
      } else {
        setErrorMessage('Invalid Email or password.');
      }
    } catch (error) {
      setErrorMessage('Invalid Email or password.');
    }
  };

  return (
    <>
      <h1 className="text-black text-5xl font-bold text-center my-5">
        Sign In
      </h1>
      {errorMessage ? (
        <p className="text-red-600 my-2 text-center">{errorMessage}</p>
      ) : null}
      <form
        className="flex flex-col items-center p-12 w-3/12 rounded-3xl m-auto border-2 border-slate-300"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="py-2 px-5 bg-blue-500 text-white border-none rounded-md"
          type="submit"
        >
          Sign In
        </button>
        <br />
        <p className="py-2 px-4 text-black border-2 border-slate-300 rounded-md">
          <Link to="/signup" className="sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
};

SignIn.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default SignIn;
