import { useState, useRef } from 'react';
import Header from "./Header"
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const onButtonClickHandler = () => {
    const message = checkValidData(email.current?.value, password?.current?.value, fullName?.current?.value)
    setErrorMsg(message);
  }
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg'
        alt='background-img'
      />

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-44 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4 px-1">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && <input
          ref={fullName}
          type='text'
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />}

        <input
          ref={email}
          type='text'
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />

        <input
          ref={password}
          type='password'
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />

        <p className='text-red-500 font-bold'>{errorMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={onButtonClickHandler}
        >
          {isSignIn ? "Sign In" : "Sign Up"}

        </button>

        <p
          className="text-slate-300">
          {isSignIn ? 'New to Netflix? ' : 'Already registered '}
          <span
            className="hover:underline"
            onClick={() => setIsSignIn(!isSignIn)}
          > {isSignIn ? 'Sign Up Now' : 'Sign In Now'} </span>
        </p>

      </form>

    </div>
  )
}

export default Login